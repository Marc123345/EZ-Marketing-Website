// Mounts the H2H Shannon Hero3D (as cubes) into the home hero container.
import { createRoot } from 'react-dom/client'
import { Hero3D } from './Hero3D'

const host = document.querySelector<HTMLElement>('[data-hero3d]')
if (host && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const mount = document.createElement('div')
  mount.className = 'ezh4__mount'
  host.prepend(mount)
  createRoot(mount).render(<Hero3D />)
  requestAnimationFrame(() => host.classList.add('is-ready'))
}
