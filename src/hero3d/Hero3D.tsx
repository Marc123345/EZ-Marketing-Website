// Hero3D, copied from the H2H Shannon site (Marc123345/Designsystemlayoutcreationshannon,
// src/components/Hero3D.tsx). Motion, physics, camera, lights and interaction are unchanged.
// EZ changes: tokens are rounded cubes (was coins) with a photo or logo badge on every face,
// and the image lists below.
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const brandLogos = [
  "/assets/images/hero3d/logo-facebook.png",
  "/assets/images/hero3d/logo-instagram.png",
  "/assets/images/hero3d/logo-paving-leads.png",
  "/assets/images/hero3d/logo-meta.png",
  "/assets/images/hero3d/logo-roofcoat-leads.png",
  "/assets/images/hero3d/logo-whatsapp.png",
  "/assets/images/hero3d/logo-ez.png",
];

const PEOPLE_IMAGES = [
  "/assets/images/hero3d/ezra.jpg",
  "/assets/images/hero3d/marc-friedman.jpg",
  "/assets/images/hero3d/dani-twillo.jpg",
  "/assets/images/hero3d/yael-rubinson.jpg",
  "/assets/images/hero3d/job-roof.jpg",
  "/assets/images/hero3d/job-paving.jpg",
];

// Cube face: dark navy tile with the photo or badge in a circle, like the earlier cube hero.
const FACE_BG = "#0c2733";
function cubeFaceTexture(url: string, anisotropy: number): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const paint = (img?: HTMLImageElement) => {
    ctx.fillStyle = FACE_BG;
    ctx.fillRect(0, 0, size, size);
    if (!img) return;
    const c = size / 2;
    const r = size * 0.4;
    ctx.save();
    ctx.beginPath();
    ctx.arc(c, c, r, 0, Math.PI * 2);
    ctx.clip();
    const s = Math.max((r * 2) / img.width, (r * 2) / img.height);
    ctx.drawImage(img, c - (img.width * s) / 2, c - (img.height * s) / 2, img.width * s, img.height * s);
    ctx.restore();
    ctx.beginPath();
    ctx.arc(c, c, r, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(24,184,248,0.5)";
    ctx.lineWidth = 4;
    ctx.stroke();
  };
  paint();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = anisotropy;
  const img = new Image();
  img.onload = () => {
    paint(img);
    texture.needsUpdate = true;
  };
  img.src = url;
  return texture;
}

const BOUNDS_X = 16;
const BOUNDS_Y = 12;

const PARALLAX_LAYERS = [-3.5, -2, -0.8, 0.8, 2, 3.5];

interface PhysicsObject {
  mesh: THREE.Group;
  velocity: THREE.Vector3;
  position: THREE.Vector3;
  radius: number;
  baseRotationSpeed: number;
  parallaxStrength: number;
  floatPhase: number;
  floatSpeed: number;
  floatAmplitude: number;
}

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 0, 35);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(10, 20, 15);
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xeef2ff, 0.8);
    fillLight.position.set(-10, -5, 10);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
    rimLight.position.set(0, 0, -10);
    scene.add(rimLight);

    // Rounded cube in place of the coin (side 1.6 at scale 1, so it spans about the coin's width).
    const coinGeometry = new RoundedBoxGeometry(1.6, 1.6, 1.6, 4, 0.14);

    const sideMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c2733,
      roughness: 0.3,
      metalness: 0.05,
    });

    const objects: PhysicsObject[] = [];
    const loadedTextures: THREE.Texture[] = [];

    const createToken = (url: string, size: number, index: number, total: number) => {
      const group = new THREE.Group();

      const texture = cubeFaceTexture(url, renderer.capabilities.getMaxAnisotropy());
      loadedTextures.push(texture);

      const faceMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        color: 0xffffff,
        roughness: 0.3,
        metalness: 0.05,
      });

      const coin = new THREE.Mesh(coinGeometry, faceMaterial);
      coin.rotation.x = Math.PI / 2;
      coin.scale.set(size, size, size);
      group.add(coin);

      const angle = (index / total) * Math.PI * 2;
      const spreadX = BOUNDS_X * 0.7;
      const spreadY = BOUNDS_Y * 0.7;
      const x = Math.cos(angle) * spreadX * (0.5 + Math.random() * 0.5);
      const y = Math.sin(angle) * spreadY * (0.5 + Math.random() * 0.5);
      const z = (Math.random() - 0.5) * 3;

      group.position.set(x, y, z);
      group.scale.set(0, 0, 0);
      mainGroup.add(group);

      const layerIndex = index % PARALLAX_LAYERS.length;
      const parallaxStrength = PARALLAX_LAYERS[layerIndex];

      objects.push({
        mesh: group,
        velocity: new THREE.Vector3(0, 0, 0),
        position: new THREE.Vector3(x, y, z),
        radius: size,
        baseRotationSpeed: (Math.random() - 0.5) * 0.3,
        parallaxStrength,
        floatPhase: Math.random() * Math.PI * 2,
        floatSpeed: 0.4 + Math.random() * 0.5,
        floatAmplitude: 0.12 + Math.random() * 0.18,
      });

      gsap.to(group.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.8,
        delay: 0.08 * index,
        ease: "back.out(1.4)",
      });
    };

    const totalTokens = PEOPLE_IMAGES.length + brandLogos.length;
    PEOPLE_IMAGES.forEach((url, i) => createToken(url, 3.8, i, totalTokens));
    brandLogos.forEach((url, i) =>
      createToken(url, 3.0, i + PEOPLE_IMAGES.length, totalTokens)
    );

    const mouse = new THREE.Vector2();
    const targetMouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mouse3D = new THREE.Vector3();

    let draggedObject: PhysicsObject | null = null;
    let hoveredObject: PhysicsObject | null = null;

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(plane, mouse3D);
    };

    const findHitObject = (): PhysicsObject | null => {
      const intersects = raycaster.intersectObjects(mainGroup.children, true);
      const hit = intersects.find((h) => h.object.parent instanceof THREE.Group);
      if (hit && hit.object.parent) {
        return objects.find((o) => o.mesh === hit.object.parent) || null;
      }
      return null;
    };

    const setHover = (obj: PhysicsObject | null) => {
      if (obj === hoveredObject) return;
      if (hoveredObject) {
        gsap.to(hoveredObject.mesh.scale, { x: 1, y: 1, z: 1, duration: 0.25 });
      }
      hoveredObject = obj;
      if (obj) {
        container.style.cursor = "grab";
        gsap.to(obj.mesh.scale, { x: 1.12, y: 1.12, z: 1.12, duration: 0.3 });
      } else {
        container.style.cursor = "default";
      }
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      updateMouse(clientX, clientY);
      if (!draggedObject) {
        setHover(findHitObject());
      }
    };

    const onPointerDown = () => {
      if (hoveredObject) {
        draggedObject = hoveredObject;
        container.style.cursor = "grabbing";
        gsap.to(draggedObject.mesh.scale, { x: 0.95, y: 0.95, z: 0.95, duration: 0.1 });
      }
    };

    const onPointerUp = () => {
      if (draggedObject) {
        gsap.to(draggedObject.mesh.scale, {
          x: 1.12,
          y: 1.12,
          z: 1.12,
          duration: 0.4,
          ease: "elastic.out(1, 0.5)",
        });
      }
      draggedObject = null;
      container.style.cursor = hoveredObject ? "grab" : "default";
    };

    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleMouseDown = () => onPointerDown();
    const handleMouseUp = () => onPointerUp();

    const handleTouchStart = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      updateMouse(e.touches[0].clientX, e.touches[0].clientY);
      setHover(findHitObject());
      onPointerDown();
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchEnd = () => onPointerUp();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    const clock = new THREE.Clock();
    let animId: number;
    const tmpVel = new THREE.Vector3();

    const springPos = new THREE.Vector2();
    const springVel = new THREE.Vector2();
    const SPRING_K = 160;
    const SPRING_DAMP = 16;

    const prevMouse = new THREE.Vector2();
    const mouseVelocity = new THREE.Vector2();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const rawDelta = clock.getDelta();
      const delta = Math.min(rawDelta, 0.05);
      const time = clock.elapsedTime;

      if (rawDelta > 0) {
        mouseVelocity.x = (mouse.x - prevMouse.x) / delta;
        mouseVelocity.y = (mouse.y - prevMouse.y) / delta;
      }
      prevMouse.copy(mouse);

      const springAccX = -SPRING_K * (springPos.x - mouse.x) - SPRING_DAMP * springVel.x;
      const springAccY = -SPRING_K * (springPos.y - mouse.y) - SPRING_DAMP * springVel.y;
      springVel.x += springAccX * delta;
      springVel.y += springAccY * delta;
      springPos.x += springVel.x * delta;
      springPos.y += springVel.y * delta;

      targetMouse.lerp(mouse, 0.05);

      const tiltX = targetMouse.x * 0.1 + THREE.MathUtils.clamp(mouseVelocity.x, -1, 1) * 0.04;
      const tiltY = -targetMouse.y * 0.07 - THREE.MathUtils.clamp(mouseVelocity.y, -1, 1) * 0.03;
      mainGroup.rotation.y = THREE.MathUtils.lerp(mainGroup.rotation.y, tiltX, 0.08);
      mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, tiltY, 0.08);

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, -springPos.x * 0.6, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, springPos.y * 0.4, 0.05);

      for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];

        if (obj === draggedObject) {
          const k = 8.0;
          obj.velocity.x += (mouse3D.x - obj.position.x) * k * delta;
          obj.velocity.y += (mouse3D.y - obj.position.y) * k * delta;
          obj.velocity.multiplyScalar(0.7);
        } else {
          const cx = obj.position.x;
          const cy = obj.position.y;
          const distCenter = Math.sqrt(cx * cx + cy * cy);
          const gravity = 0.8 + distCenter * 0.12;
          obj.velocity.x -= cx * gravity * delta;
          obj.velocity.y -= cy * gravity * delta;
          obj.velocity.y -= 0.5 * delta;

          const dist = obj.position.distanceTo(mouse3D);
          if (dist < 7) {
            const force = (7 - dist) * 15 * delta;
            const angle = Math.atan2(
              obj.position.y - mouse3D.y,
              obj.position.x - mouse3D.x
            );
            obj.velocity.x += Math.cos(angle) * force;
            obj.velocity.y += Math.sin(angle) * force;
          }

          for (let j = i + 1; j < objects.length; j++) {
            const other = objects[j];
            const dx = obj.position.x - other.position.x;
            const dy = obj.position.y - other.position.y;
            const dz = obj.position.z - other.position.z;
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
            const minD = obj.radius + other.radius + 0.3;

            if (d < minD && d > 0) {
              const f = (minD - d) * 25 * delta;
              const nx = dx / d;
              const ny = dy / d;
              obj.velocity.x += nx * f;
              obj.velocity.y += ny * f;
              other.velocity.x -= nx * f;
              other.velocity.y -= ny * f;
            }
          }

          obj.velocity.multiplyScalar(0.93);
        }

        tmpVel.copy(obj.velocity).multiplyScalar(delta * 12);
        obj.position.add(tmpVel);

        if (obj.position.x > BOUNDS_X) {
          obj.position.x = BOUNDS_X;
          obj.velocity.x *= -0.5;
        } else if (obj.position.x < -BOUNDS_X) {
          obj.position.x = -BOUNDS_X;
          obj.velocity.x *= -0.5;
        }
        if (obj.position.y > BOUNDS_Y) {
          obj.position.y = BOUNDS_Y;
          obj.velocity.y *= -0.5;
        } else if (obj.position.y < -BOUNDS_Y) {
          obj.position.y = -BOUNDS_Y;
          obj.velocity.y *= -0.5;
        }

        const floatY = Math.sin(time * obj.floatSpeed + obj.floatPhase) * obj.floatAmplitude;
        const floatX = Math.cos(time * obj.floatSpeed * 0.7 + obj.floatPhase) * obj.floatAmplitude * 0.5;

        const parallaxOffsetX = springPos.x * obj.parallaxStrength;
        const parallaxOffsetY = springPos.y * obj.parallaxStrength * 0.7;
        const parallaxOffsetZ = Math.abs(obj.parallaxStrength) * springPos.x * 0.15 * Math.sign(obj.parallaxStrength);

        obj.mesh.position.set(
          obj.position.x + parallaxOffsetX + floatX,
          obj.position.y + parallaxOffsetY + floatY,
          obj.position.z + parallaxOffsetZ,
        );

        const mesh = obj.mesh.children[0];
        if (mesh) {
          const parallaxTiltX = springVel.y * 0.015 * obj.parallaxStrength;
          const parallaxTiltZ = -springVel.x * 0.015 * obj.parallaxStrength;

          mesh.rotation.x = THREE.MathUtils.lerp(
            mesh.rotation.x,
            Math.PI / 2 - obj.velocity.y * 0.3 + parallaxTiltX,
            0.06
          );
          mesh.rotation.z = THREE.MathUtils.lerp(
            mesh.rotation.z,
            obj.velocity.x * 0.3 + obj.baseRotationSpeed * 0.1 + parallaxTiltZ,
            0.06
          );
        }
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      loadedTextures.forEach((t) => t.dispose());

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        }
      });

      coinGeometry.dispose();
      sideMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
