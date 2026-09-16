// Mounts the H2H-style 3D cubes into the home hero container.
import { createRoot } from 'react-dom/client'
import { LusionConnectors } from './LusionConnectors'

const host = document.querySelector<HTMLElement>('[data-hero3d]')
if (host && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const mount = document.createElement('div')
  mount.className = 'ezh4__mount'
  host.prepend(mount)
  createRoot(mount).render(<LusionConnectors onReady={() => host.classList.add('is-ready')} />)
}
