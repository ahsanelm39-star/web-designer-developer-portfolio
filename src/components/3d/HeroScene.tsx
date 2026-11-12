'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface HeroSceneProps {
  className?: string;
}

export default function HeroScene({ className }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    let isDark = document.documentElement.classList.contains('dark');

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 540;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2.8, 2.2, 5.0);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // 2. Lighting setup
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x222a38 : 0xffffff,
      isDark ? 1.8 : 2.2
    );
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(
      isDark ? 0xd4ff32 : 0x334422,
      isDark ? 2.2 : 1.5
    );
    dirLight1.position.set(5, 7, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(
      isDark ? 0x3b82f6 : 0x94a3b8,
      isDark ? 1.4 : 1.0
    );
    dirLight2.position.set(-5, -2, -3);
    scene.add(dirLight2);

    // 3. Architectural Assembly Group
    const assemblyGroup = new THREE.Group();
    scene.add(assemblyGroup);

    // Palette helper
    const getColors = (dark: boolean) => ({
      slabBg: dark ? 0x121722 : 0xf8fafc,
      slabBorder: dark ? 0x2d3748 : 0xcbd5e1,
      accentEdge: dark ? 0xd4ff32 : 0x2d5e00,
      accentGlow: dark ? 0xa3e635 : 0x3f6212,
      pillarColor: dark ? 0x263042 : 0x94a3b8,
      gridLine: dark ? 0x1e2736 : 0xe2e8f0,
    });

    let currentColors = getColors(isDark);

    // Geometries & Materials arrays for cleanup
    const disposables: (THREE.BufferGeometry | THREE.Material)[] = [];

    // Helper: Create an architectural plane slab
    const slabs: THREE.Mesh[] = [];
    const edgeLines: THREE.LineSegments[] = [];

    const slabGeom = new THREE.BoxGeometry(2.5, 0.06, 1.8);
    disposables.push(slabGeom);

    const levels = [
      { y: -0.65, rotY: -0.08, rotX: 0.08 },
      { y: -0.15, rotY: 0.06, rotX: 0.05 },
      { y: 0.35, rotY: -0.05, rotX: 0.1 },
      { y: 0.85, rotY: 0.12, rotX: -0.04 },
    ];

    levels.forEach((lvl, index) => {
      // Slab Mesh
      const isTop = index === 3;
      const slabMat = new THREE.MeshStandardMaterial({
        color: currentColors.slabBg,
        roughness: 0.25,
        metalness: 0.35,
        transparent: true,
        opacity: 0.94,
      });
      disposables.push(slabMat);

      const slabMesh = new THREE.Mesh(slabGeom, slabMat);
      slabMesh.position.set(0, lvl.y, 0);
      slabMesh.rotation.set(lvl.rotX, lvl.rotY, 0);
      assemblyGroup.add(slabMesh);
      slabs.push(slabMesh);

      // Edge wireframe for architectural hairline feel
      const edgesGeom = new THREE.EdgesGeometry(slabGeom);
      disposables.push(edgesGeom);

      const edgeMat = new THREE.LineBasicMaterial({
        color: isTop ? currentColors.accentEdge : currentColors.slabBorder,
        linewidth: 1,
      });
      disposables.push(edgeMat);

      const edgeLine = new THREE.LineSegments(edgesGeom, edgeMat);
      slabMesh.add(edgeLine);
      edgeLines.push(edgeLine);

      // Architectural internal coordinate grid on slab top
      const gridHelper = new THREE.GridHelper(2.3, 6, currentColors.accentEdge, currentColors.gridLine);
      gridHelper.position.y = 0.035;
      disposables.push(gridHelper.geometry);
      if (Array.isArray(gridHelper.material)) {
        gridHelper.material.forEach((m) => disposables.push(m));
      } else {
        disposables.push(gridHelper.material);
      }
      slabMesh.add(gridHelper);
    });

    // 4 Architectural Load-Bearing Pillars connecting slabs
    const pillarGeom = new THREE.CylinderGeometry(0.025, 0.025, 1.7, 8);
    disposables.push(pillarGeom);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: currentColors.pillarColor,
      roughness: 0.2,
      metalness: 0.5,
    });
    disposables.push(pillarMat);

    const pillarPositions = [
      [-1.1, 0.1, -0.75],
      [1.1, 0.1, -0.75],
      [-1.1, 0.1, 0.75],
      [1.1, 0.1, 0.75],
    ];

    pillarPositions.forEach(([px, py, pz]) => {
      const pillar = new THREE.Mesh(pillarGeom, pillarMat);
      pillar.position.set(px, py, pz);
      assemblyGroup.add(pillar);
    });

    // Outer Bounding Architectural Spatial Wireframe
    const frameGeom = new THREE.BoxGeometry(2.9, 2.1, 2.1);
    disposables.push(frameGeom);
    const frameEdges = new THREE.EdgesGeometry(frameGeom);
    disposables.push(frameEdges);
    const frameMat = new THREE.LineDashedMaterial({
      color: isDark ? 0x2e3a4e : 0x94a3b8,
      dashSize: 0.15,
      gapSize: 0.08,
    });
    disposables.push(frameMat);
    const frameLines = new THREE.LineSegments(frameEdges, frameMat);
    frameLines.computeLineDistances();
    assemblyGroup.add(frameLines);

    // Floating dimensional data beacon (apex focal prism)
    const beaconGeom = new THREE.OctahedronGeometry(0.22, 0);
    disposables.push(beaconGeom);
    const beaconMat = new THREE.MeshStandardMaterial({
      color: currentColors.accentEdge,
      emissive: currentColors.accentGlow,
      emissiveIntensity: isDark ? 0.8 : 0.3,
      roughness: 0.1,
      metalness: 0.2,
    });
    disposables.push(beaconMat);
    const beacon = new THREE.Mesh(beaconGeom, beaconMat);
    beacon.position.set(0.9, 1.25, 0.5);
    assemblyGroup.add(beacon);

    // Initial render call immediately
    renderer.render(scene, camera);

    // Mouse Interaction
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.35;
      targetRotX = -y * 0.25;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Scroll interaction
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Theme change listener
    const onThemeChange = () => {
      isDark = document.documentElement.classList.contains('dark');
      currentColors = getColors(isDark);

      ambientLight.color.setHex(isDark ? 0x222a38 : 0xffffff);
      ambientLight.intensity = isDark ? 1.8 : 2.2;
      dirLight1.color.setHex(isDark ? 0xd4ff32 : 0x334422);

      slabs.forEach((s) => {
        const mat = s.material as THREE.MeshStandardMaterial;
        mat.color.setHex(currentColors.slabBg);
      });

      edgeLines.forEach((l, idx) => {
        const mat = l.material as THREE.LineBasicMaterial;
        mat.color.setHex(idx === 3 ? currentColors.accentEdge : currentColors.slabBorder);
      });

      pillarMat.color.setHex(currentColors.pillarColor);
      beaconMat.color.setHex(currentColors.accentEdge);
      beaconMat.emissive.setHex(currentColors.accentGlow);

      renderer.render(scene, camera);
    };

    window.addEventListener('themechange', onThemeChange);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.render(scene, camera);
    };
    window.addEventListener('resize', onResize);

    // Render loop
    let animId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(container);

    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      if (!reducedMotion) {
        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;

        // Base subtle slow idle oscillation
        const idleRot = Math.sin(elapsed * 0.35) * 0.06;
        assemblyGroup.rotation.y = currentRotY + idleRot + 0.15;
        assemblyGroup.rotation.x = currentRotX + Math.cos(elapsed * 0.25) * 0.04;

        // Beacon gentle float & spin
        beacon.position.y = 1.25 + Math.sin(elapsed * 1.5) * 0.08;
        beacon.rotation.y = elapsed * 0.9;
        beacon.rotation.x = elapsed * 0.5;

        // Scroll separation effect
        const scrollOffset = Math.min(scrollY / 800, 1);
        slabs.forEach((slab, i) => {
          const factor = (i - 1.5) * 0.3;
          slab.position.y = levels[i].y + factor * scrollOffset;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('themechange', onThemeChange);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, [reducedMotion]);

  if (!webglSupported) {
    return (
      <div className={`relative flex items-center justify-center p-8 ${className}`}>
        <div className="relative w-full max-w-sm aspect-square border border-border/40 rounded-2xl bg-surface/40 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono text-muted">
            <span>DIGITAL ARCHITECTURE</span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <div className="space-y-3 py-6">
            <div className="h-10 border border-border rounded-lg bg-surface flex items-center px-4 text-xs font-mono">
              01 · Strategy & Discovery
            </div>
            <div className="h-10 border border-border rounded-lg bg-surface flex items-center px-4 text-xs font-mono">
              02 · Architecture & Structure
            </div>
            <div className="h-10 border border-border rounded-lg bg-surface flex items-center px-4 text-xs font-mono">
              03 · Editorial Visual Design
            </div>
            <div className="h-10 border border-accent/40 rounded-lg bg-accent-dim flex items-center px-4 text-xs font-mono text-accent">
              04 · Front-End Engineering
            </div>
          </div>
          <div className="text-[11px] font-mono text-muted/70 flex justify-between">
            <span>PRECISION CRAFT</span>
            <span>SCALE · STABILITY</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[420px] md:min-h-[520px] select-none pointer-events-auto ${className}`}
      aria-label="Interactive 3D Architectural Digital Construction Model"
    />
  );
}
