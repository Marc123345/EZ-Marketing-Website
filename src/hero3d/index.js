// Home hero 3D scene: floating cubes with zero-gravity physics you can push around with the
// pointer. Ported from the H2H site's LusionConnectors (React Three Fiber + Rapier) to plain
// three.js so it runs on this static site. Bundled by `npm run build:hero` into
// src/assets/js/hero3d.js.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import RAPIER from '@dimforge/rapier3d-compat';

const ACCENTS = ['#18B8F8', '#0796D1', '#56CBFA', '#22D3EE'];
const BG = '#041d27';
const FACE_BG = '#062A36';
const TEX = 256;
const CUBE = 1.4;
const HALF = CUBE / 2;

const IG_PATH = 'M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z';
const FB_PATH = 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z';

// Cube faces: a circular photo, or a round logo badge.
const IMG = '/assets/images/';
const PHOTOS = [
  IMG + 'hero3d/ezra.jpg',
  IMG + 'hero3d/marc-friedman.jpg',
  IMG + 'hero3d/dani-twillo.jpg',
  IMG + 'hero3d/yael-rubinson.jpg',
  IMG + 'roof/silicone.jpg',
  IMG + 'paving/sealcoat-crack-repair-crew.jpg',
];
const LOGOS = [
  { bg: '#1877F2', svgPath: FB_PATH, svgVB: 24 },
  { bg: 'ig-gradient', svgPath: IG_PATH, svgVB: 132 },
  { bg: '#0866FF', image: IMG + 'ez/meta-logo.png', imageScale: 0.9, invert: true },
  { bg: '#0f172a', image: IMG + 'roof/roofcoat-icon.svg', imageScale: 1.25 },
  { bg: '#111111', image: IMG + 'paving/paving-leads-logo.png', imageScale: 1.1 },
  { bg: '#001820', image: IMG + 'ez/logo.svg', imageScale: 1.45 },
  { bg: '#1877F2', text: '👍' },
];

function canvasTexture(draw) {
  const c = document.createElement('canvas');
  c.width = c.height = TEX;
  const ctx = c.getContext('2d');
  ctx.fillStyle = FACE_BG;
  ctx.fillRect(0, 0, TEX, TEX);
  draw(ctx);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function loadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

function photoMaterial(url) {
  const mat = new THREE.MeshStandardMaterial({ metalness: 0.05, roughness: 0.3, envMapIntensity: 0.5 });
  mat.map = canvasTexture(() => {});
  loadImage(url).then((img) => {
    if (!img) return;
    mat.map.dispose();
    mat.map = canvasTexture((ctx) => {
      const cx = TEX / 2, r = TEX * 0.4;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cx, r, 0, Math.PI * 2);
      ctx.clip();
      const s = Math.max((r * 2) / img.width, (r * 2) / img.height);
      ctx.drawImage(img, cx - (img.width * s) / 2, cx - (img.height * s) / 2, img.width * s, img.height * s);
      ctx.restore();
      ctx.beginPath();
      ctx.arc(cx, cx, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(24,184,248,0.5)';
      ctx.lineWidth = 3;
      ctx.stroke();
    });
    mat.needsUpdate = true;
  });
  return mat;
}

function logoMaterial(logo) {
  const mat = new THREE.MeshStandardMaterial({ metalness: 0.05, roughness: 0.3, envMapIntensity: 0.5 });
  const draw = (img) => (ctx) => {
    const cx = TEX / 2, r = TEX * 0.3;
    ctx.beginPath();
    ctx.arc(cx, cx, r, 0, Math.PI * 2);
    if (logo.bg === 'ig-gradient') {
      const g = ctx.createLinearGradient(cx - r, cx + r, cx + r, cx - r);
      ['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5'].forEach((col, i) => g.addColorStop(i / 4, col));
      ctx.fillStyle = g;
    } else ctx.fillStyle = logo.bg;
    ctx.fill();
    if (logo.svgPath) {
      const scale = (r * 1.6) / logo.svgVB;
      ctx.save();
      ctx.translate(cx - (logo.svgVB * scale) / 2, cx - (logo.svgVB * scale) / 2);
      ctx.scale(scale, scale);
      ctx.fillStyle = '#fff';
      ctx.fill(new Path2D(logo.svgPath));
      ctx.restore();
    } else if (logo.text) {
      ctx.font = `${r * 1.1}px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(logo.text, cx, cx + 4);
    } else if (img) {
      const box = r * (logo.imageScale || 1);
      const s = Math.min(box / img.width, box / img.height) * 1.4;
      const w = img.width * s, h = img.height * s;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cx, r, 0, Math.PI * 2);
      ctx.clip();
      if (logo.invert) ctx.filter = 'brightness(0) invert(1)';
      ctx.drawImage(img, cx - w / 2, cx - h / 2, w, h);
      ctx.restore();
    }
  };
  mat.map = canvasTexture(draw(null));
  if (logo.image) {
    loadImage(logo.image).then((img) => {
      if (!img) return;
      mat.map.dispose();
      mat.map = canvasTexture(draw(img));
      mat.needsUpdate = true;
    });
  }
  return mat;
}

async function start(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;cursor:grab;touch-action:pan-y';
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(17.5, 1, 1, 20);
  camera.position.set(0, 0, 15);
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const spot = new THREE.SpotLight(0xffffff, 60, 0, 0.15, 1);
  spot.position.set(10, 10, 10);
  spot.castShadow = true;
  scene.add(spot);

  await RAPIER.init();
  const world = new RAPIER.World({ x: 0, y: 0, z: 0 });
  const geometry = new RoundedBoxGeometry(CUBE, CUBE, CUBE, 4, 0.12);
  const rand = (n) => (Math.random() - 0.5) * n;

  const bodies = [];
  const accentLights = [];
  const addCube = (material, accent) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = mesh.receiveShadow = true;
    scene.add(mesh);
    const body = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic().setTranslation(rand(6), rand(6), rand(3)).setLinearDamping(3).setAngularDamping(0.8)
    );
    world.createCollider(RAPIER.ColliderDesc.cuboid(HALF, HALF, HALF).setFriction(0.1), body);
    if (accent) {
      const light = new THREE.PointLight(ACCENTS[0], 4, 2.5);
      mesh.add(light);
      accentLights.push(light);
    }
    bodies.push({ body, mesh });
  };
  PHOTOS.forEach((url, i) => addCube(photoMaterial(url), i >= PHOTOS.length - 2));
  LOGOS.forEach((logo, i) => addCube(logoMaterial(logo), i >= LOGOS.length - 2));

  // Invisible ball that follows the pointer and shoves cubes out of the way.
  const pointerBody = world.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(100, 100, 0));
  world.createCollider(RAPIER.ColliderDesc.ball(1), pointerBody);
  const pointer = { x: 0, y: 0, active: false };
  const onMove = (e) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    pointer.active = true;
  };
  renderer.domElement.addEventListener('pointermove', onMove);
  renderer.domElement.addEventListener('pointerleave', () => { pointer.active = false; pointerBody.setNextKinematicTranslation({ x: 100, y: 100, z: 0 }); });

  let accent = 0;
  renderer.domElement.addEventListener('click', () => {
    accent = (accent + 1) % ACCENTS.length;
    accentLights.forEach((l) => l.color.set(ACCENTS[accent]));
  });

  const view = { w: 1, h: 1 };
  const resize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    view.h = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    view.w = view.h * camera.aspect;
  };
  resize();
  new ResizeObserver(resize).observe(container);

  // Pause the loop while the hero is off screen.
  let visible = true;
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { rootMargin: '120px 0px' }).observe(container);

  const q = new THREE.Quaternion();
  const loop = () => {
    requestAnimationFrame(loop);
    if (!visible) return;
    if (pointer.active) pointerBody.setNextKinematicTranslation({ x: (pointer.x * view.w) / 2, y: (pointer.y * view.h) / 2, z: 0 });
    for (const { body } of bodies) {
      const p = body.translation();
      body.applyImpulse({ x: -p.x * 0.2, y: -p.y * 0.2, z: -p.z * 0.2 }, true);
    }
    world.step();
    for (const { body, mesh } of bodies) {
      const p = body.translation();
      const r = body.rotation();
      mesh.position.set(p.x, p.y, p.z);
      mesh.quaternion.copy(q.set(r.x, r.y, r.z, r.w));
    }
    renderer.render(scene, camera);
  };
  loop();
  container.classList.add('is-ready');
}

const el = document.querySelector('[data-hero3d]');
if (el && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  try {
    start(el).catch(() => el.classList.add('is-fallback'));
  } catch (e) {
    el.classList.add('is-fallback');
  }
} else if (el) {
  el.classList.add('is-fallback');
}
