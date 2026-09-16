/**
 * LusionConnectors, copied from the H2H site (Marc123345/New, src/components/LusionConnectors.tsx)
 * so the EZ Marketing hero has the same physics, lighting and ambient occlusion.
 * EZ changes: cyan accents and navy backgrounds, EZ team and job photos, and Meta / RoofCoat
 * Leads / Paving Leads / EZ logos. Logo cubes can also carry an image.
 */

import { useRef, useReducer, useMemo, useState, useEffect, Suspense } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  Lightformer,
  RoundedBox,
} from '@react-three/drei'
import {
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
} from '@react-three/rapier'
import type { RapierRigidBody } from '@react-three/rapier'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import * as THREE from 'three'

// Preload Rapier WASM immediately on module import — shaves ~2-3s off
// the time between first paint and physics becoming interactive.
import('@dimforge/rapier3d-compat').then((r) => r.init()).catch(() => {})

// ─── Accent palette ───────────────────────────────────────────────────────────

const ACCENTS = ['#18B8F8', '#0796D1', '#56CBFA', '#22D3EE'] as const

// ─── Image URLs — full photos for faces, logo images for brands ──────────────

// Face images — preload immediately so textures are ready when physics starts.
const FACE_URLS = [
  '/assets/images/hero3d/ezra.jpg',
  '/assets/images/hero3d/marc-friedman.jpg',
  '/assets/images/hero3d/dani-twillo.jpg',
  '/assets/images/hero3d/yael-rubinson.jpg',
  '/assets/images/roof/silicone.jpg',
  '/assets/images/paving/sealcoat-crack-repair-crew.jpg',
]

// Kick off image downloads immediately at module load
FACE_URLS.forEach((url) => { const img = new Image(); img.crossOrigin = 'anonymous'; img.src = url; })

interface LogoDef { text: string; bg: string; fg: string; svgPath?: string; svgVB?: number; image?: string; imageScale?: number; invert?: boolean }
const FB_PATH = 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z'
const LOGOS: LogoDef[] = [
  { text: '', bg: '#1877F2', fg: '#fff', svgVB: 24, svgPath: FB_PATH },
  { text: '', bg: 'ig-gradient', fg: '#fff', svgVB: 132, svgPath: 'M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z' },
  { text: '', bg: '#0866FF', fg: '#fff', image: '/assets/images/ez/meta-logo.png', imageScale: 1.5, invert: true },
  { text: '', bg: '#111827', fg: '#fff', image: '/assets/images/paving/paving-leads-logo.png', imageScale: 1.55 },
  { text: '', bg: '#0f172a', fg: '#fff', image: '/assets/images/roof/roofcoat-icon.svg', imageScale: 1.35 },
  { text: '', bg: '#001820', fg: '#fff', image: '/assets/images/ez/logo.svg', imageScale: 1.75 },
  { text: '👍', bg: '#1877F2', fg: '#fff' },
]

// ─── Canvas texture generators (no CORS issues) ─────────────────────────────

const TEX = 512
const FACE_BG = '#0c2733'

function createLogoTexture(logo: LogoDef, img?: HTMLImageElement | null): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = TEX; c.height = TEX
  const ctx = c.getContext('2d')!

  // Same background as face cubes
  ctx.fillStyle = FACE_BG
  ctx.fillRect(0, 0, TEX, TEX)

  // Centered logo circle
  const cx = TEX / 2
  const cy = TEX / 2
  const r = TEX * 0.3
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)

  if (logo.bg === 'ig-gradient') {
    const grad = ctx.createLinearGradient(cx - r, cy + r, cx + r, cy - r)
    grad.addColorStop(0, '#feda75')
    grad.addColorStop(0.25, '#fa7e1e')
    grad.addColorStop(0.5, '#d62976')
    grad.addColorStop(0.75, '#962fbf')
    grad.addColorStop(1, '#4f5bd5')
    ctx.fillStyle = grad
  } else {
    ctx.fillStyle = logo.bg
  }
  ctx.fill()

  if (logo.image) {
    if (img) {
      const box = r * (logo.imageScale ?? 1)
      const s = Math.min(box / img.width, box / img.height)
      const w = img.width * s
      const h = img.height * s
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.clip()
      if (logo.invert) ctx.filter = 'brightness(0) invert(1)'
      ctx.drawImage(img, cx - w / 2, cy - h / 2, w, h)
      ctx.restore()
    }
  } else if (logo.svgPath && logo.svgVB) {
    // Draw SVG path scaled to fit inside the circle
    const path = new Path2D(logo.svgPath)
    const scale = (r * 1.6) / logo.svgVB
    ctx.save()
    ctx.translate(cx - (logo.svgVB * scale) / 2, cy - (logo.svgVB * scale) / 2)
    ctx.scale(scale, scale)
    ctx.fillStyle = logo.fg
    ctx.fill(path)
    ctx.restore()
  } else {
    // Logo text
    ctx.fillStyle = logo.fg
    ctx.font = `bold ${r * 1.1}px system-ui, -apple-system, "Apple Color Emoji", "Segoe UI Emoji", sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(logo.text, cx, cy + 2)
  }

  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}


function useFaceTexture(url: string): THREE.Texture {
  const [tex, setTex] = useState<THREE.Texture>(() => {
    const c = document.createElement('canvas')
    c.width = TEX; c.height = TEX
    const ctx = c.getContext('2d')!
    ctx.fillStyle = FACE_BG
    ctx.fillRect(0, 0, TEX, TEX)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  })

  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      if (cancelled) return
      const c = document.createElement('canvas')
      c.width = TEX; c.height = TEX
      const ctx = c.getContext('2d')!

      // Purple background
      ctx.fillStyle = FACE_BG
      ctx.fillRect(0, 0, TEX, TEX)

      // Draw face centered in a circular clip with padding
      const cx = TEX / 2
      const cy = TEX / 2
      const radius = TEX * 0.4

      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.clip()

      // Cover-fit the image inside the circle
      const aspect = img.width / img.height
      let dw = radius * 2
      let dh = dw / aspect
      if (dh < dw) { dh = dw; dw = dh * aspect }
      ctx.drawImage(img, cx - dw / 2, cy - dh / 2, dw, dh)
      ctx.restore()

      // Subtle ring around the face
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(24,184,248,0.5)'
      ctx.lineWidth = 2
      ctx.stroke()

      const t = new THREE.CanvasTexture(c)
      t.colorSpace = THREE.SRGBColorSpace
      setTex(t)
    }
    img.src = url
    return () => { cancelled = true }
  }, [url])

  return tex
}

// ─── Cube size ────────────────────────────────────────────────────────────────

const CUBE_SIZE = 1.4
const CUBE_HALF = CUBE_SIZE / 2
const CUBE_RADIUS = 0.12

// ─── Cube components ─────────────────────────────────────────────────────────

function FaceCube({ url, size = CUBE_SIZE }: { url: string; size?: number }) {
  const texture = useFaceTexture(url)
  return (
    <RoundedBox args={[size, size, size]} radius={CUBE_RADIUS} smoothness={4} castShadow receiveShadow>
      <meshStandardMaterial map={texture} metalness={0.05} roughness={0.3} envMapIntensity={0.5} />
    </RoundedBox>
  )
}

function LogoCube({ logo, size = CUBE_SIZE }: { logo: LogoDef; size?: number }) {
  const [texture, setTexture] = useState(() => createLogoTexture(logo))
  useEffect(() => {
    if (!logo.image) return
    let cancelled = false
    const img = new Image()
    img.onload = () => { if (!cancelled) setTexture(createLogoTexture(logo, img)) }
    img.src = logo.image
    return () => { cancelled = true }
  }, [logo])
  return (
    <RoundedBox args={[size, size, size]} radius={CUBE_RADIUS} smoothness={4} castShadow receiveShadow>
      <meshStandardMaterial map={texture} metalness={0.05} roughness={0.3} envMapIntensity={0.5} />
    </RoundedBox>
  )
}

// ─── Pointer ──────────────────────────────────────────────────────────────────

function Pointer() {
  const ref = useRef<RapierRigidBody>(null)
  const vec = useMemo(() => new THREE.Vector3(), [])
  const hasInteracted = useRef(false)

  useFrame(({ pointer, viewport }) => {
    // Don't move the pointer ball until the user actually touches/moves
    // the canvas — prevents it sitting at (0,0,0) and pushing cubes on load
    if (!hasInteracted.current) {
      if (pointer.x !== 0 || pointer.y !== 0) hasInteracted.current = true
      else return
    }
    ref.current?.setNextKinematicTranslation(
      vec.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0),
    )
  })

  return (
    <RigidBody position={[100, 100, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  )
}

// ─── Connector ────────────────────────────────────────────────────────────────

function Connector({
  position,
  faceUrl,
  logo,
  accent = false,
  accentColor,
}: {
  position?: [number, number, number]
  faceUrl?: string
  logo?: LogoDef
  accent?: boolean
  accentColor?: string
}) {
  const api = useRef<RapierRigidBody>(null)
  const vec = useMemo(() => new THREE.Vector3(), [])
  const r = THREE.MathUtils.randFloatSpread
  const pos = useMemo<[number, number, number]>(
    () => position ?? [r(3), r(3), r(1.5)],
    [], // eslint-disable-line react-hooks/exhaustive-deps
  )

  useFrame(() => {
    if (!api.current) return
    api.current.applyImpulse(
      vec.copy(api.current.translation() as unknown as THREE.Vector3).negate().multiplyScalar(0.2),
      true,
    )
  })

  return (
    <RigidBody
      ref={api}
      position={pos}
      linearDamping={3}
      angularDamping={0.8}
      friction={0.1}
      colliders={false}
    >
      <CuboidCollider args={[CUBE_HALF, CUBE_HALF, CUBE_HALF]} />
      {faceUrl && <FaceCube url={faceUrl} />}
      {logo && <LogoCube logo={logo} />}
      {accent && accentColor && (
        <pointLight intensity={4} distance={2.5} color={accentColor} />
      )}
    </RigidBody>
  )
}

// ─── Camera rig (from the H2H Hero3D coins) ─────────────────────────────────
// Hero3D's camera: 45° lens and a spring that follows the pointer, so the camera drifts
// opposite the mouse with a slight tilt. Distance is set so the cubes fill the frame at
// a similar size to the original 17.5° / z=15 framing, with more of the wide-lens depth.

const RIG_FOV = 45
const RIG_Z = 8.5

function CameraRig() {
  const springPos = useMemo(() => new THREE.Vector2(), [])
  const springVel = useMemo(() => new THREE.Vector2(), [])
  const target = useMemo(() => new THREE.Vector2(), [])
  const prev = useMemo(() => new THREE.Vector2(), [])
  const SPRING_K = 160
  const SPRING_DAMP = 16

  useFrame(({ camera, pointer }, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05)
    const velX = delta > 0 ? (pointer.x - prev.x) / delta : 0
    const velY = delta > 0 ? (pointer.y - prev.y) / delta : 0
    prev.set(pointer.x, pointer.y)

    springVel.x += (-SPRING_K * (springPos.x - pointer.x) - SPRING_DAMP * springVel.x) * delta
    springVel.y += (-SPRING_K * (springPos.y - pointer.y) - SPRING_DAMP * springVel.y) * delta
    springPos.x += springVel.x * delta
    springPos.y += springVel.y * delta
    target.lerp(pointer, 0.05)

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, -springPos.x * 0.6, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, springPos.y * 0.4, 0.05)

    const tiltY = target.x * 0.1 + THREE.MathUtils.clamp(velX, -1, 1) * 0.04
    const tiltX = -target.y * 0.07 - THREE.MathUtils.clamp(velY, -1, 1) * 0.03
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -tiltY, 0.08)
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, -tiltX, 0.08)
  })

  return null
}

// ─── Scene ────────────────────────────────────────────────────────────────────

function Scene({ accent }: { accent: number }) {
  const accentColor = ACCENTS[accent]

  return (
    <Physics gravity={[0, 0, 0]}>
      <Pointer />

      {FACE_URLS.map((url, i) => (
        <Connector key={`f${i}`} faceUrl={url} accent={i >= FACE_URLS.length - 2} accentColor={accentColor} />
      ))}
      {LOGOS.map((logo, i) => (
        <Connector key={`l${i}`} logo={logo} accent={i >= LOGOS.length - 2} accentColor={accentColor} />
      ))}

      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </Physics>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function LusionConnectors({ onReady }: { onReady?: () => void } = {}) {
  // Visibility gating — when the hero scrolls off-screen, switch the Canvas
  // frameloop to "demand" so R3F stops scheduling rAF work. This halts the
  // Rapier physics stepping, the postprocessing pass, and the per-frame
  // useFrame loops entirely until the user scrolls back. Biggest single perf
  // win on the site since the hero runs ~14 rigid bodies continuously.
  const wrapRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const el = wrapRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const [accent, cycleAccent] = useReducer(
    (s: number) => (s + 1) % ACCENTS.length,
    0,
  )

  // Same camera on every breakpoint — the user wants mobile cubes to feel as
  // close as desktop. R3F automatically adapts frustum width to the canvas
  // aspect, so the narrower mobile canvas just shows a tighter horizontal
  // slice of the same scene at the same apparent cube size.
  const cameraConfig = { position: [0, 0, RIG_Z] as [number, number, number], fov: RIG_FOV, near: 0.1, far: 100 }

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        onClick={cycleAccent}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        camera={cameraConfig}
        frameloop={isVisible ? 'always' : 'demand'}
        onCreated={() => onReady?.()}
        style={{ width: '100%', height: '100%', cursor: 'grab', touchAction: 'pan-y' }}
      >
        <color attach="background" args={['#071c25']} />
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <CameraRig />
        <Suspense fallback={null}>
          <Scene accent={accent} />
        </Suspense>
      </Canvas>
    </div>
  )
}
