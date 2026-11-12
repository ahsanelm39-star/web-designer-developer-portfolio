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

    // ── WebGL support check ──────────────────────────────────────────────────
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) { setWebglSupported(false); return; }
    } catch {
      setWebglSupported(false);
      return;
    }

    let isDark = document.documentElement.classList.contains('dark');

    // ── Scene / Camera / Renderer ────────────────────────────────────────────
    const scene = new THREE.Scene();

    const isMobile = container.clientWidth < 640;
    const isTablet = container.clientWidth < 1024;

    const width  = container.clientWidth  || 540;
    const height = container.clientHeight || 540;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    if (isMobile) {
      camera.position.set(0, 0.8, 7.5);
    } else if (isTablet) {
      camera.position.set(1.2, 1.0, 6.5);
    } else {
      camera.position.set(2.0, 1.4, 6.0);
    }
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // ── Color palette ────────────────────────────────────────────────────────
    const getPalette = (dark: boolean) => ({
      frameBg:      dark ? 0x0f1420 : 0xfafcff,
      frameBorder:  dark ? 0x1e2d45 : 0xdce6f5,
      frameChrome:  dark ? 0x1a2540 : 0xe8eef8,
      panelBg:      dark ? 0x111827 : 0xf1f5fb,
      panelBorder:  dark ? 0x243050 : 0xcad5ea,
      accent:       dark ? 0xd4ff32 : 0x2c5e00,
      accentGlow:   dark ? 0xa8d400 : 0x3a7a00,
      metalLight:   dark ? 0x2a3a55 : 0x94a3b8,
      gridLine:     dark ? 0x192035 : 0xe2eaf5,
      dotColor:     dark ? 0xd4ff32 : 0x3a6b00,
      tabActive:    dark ? 0xd4ff32 : 0x2c5e00,
      tabInactive:  dark ? 0x1e2d45 : 0xdce6f5,
      mobileBg:     dark ? 0x0d1520 : 0xf5f9ff,
      mobileBorder: dark ? 0x243050 : 0xcad5ea,
      glassPanel:   dark ? 0x131f33 : 0xedf2fc,
      cardSurface:  dark ? 0x17243a : 0xf9fafb,
      lineColor:    dark ? 0x2a3d5a : 0xbfccdd,
      barAccent:    dark ? 0xd4ff32 : 0x4a8c10,
    });

    let pal = getPalette(isDark);

    // ── Disposables registry ─────────────────────────────────────────────────
    const geo: THREE.BufferGeometry[] = [];
    const mat: THREE.Material[] = [];
    const trackGeo = <T extends THREE.BufferGeometry>(g: T): T => { geo.push(g); return g; };
    const trackMat = <T extends THREE.Material>(m: T): T => { mat.push(m); return m; };

    // ── Root group ───────────────────────────────────────────────────────────
    const root = new THREE.Group();
    scene.add(root);

    // ════════════════════════════════════════════════════════════════════════
    //  LIGHTING
    // ════════════════════════════════════════════════════════════════════════
    const ambient = new THREE.AmbientLight(isDark ? 0x1a2540 : 0xffffff, isDark ? 2.0 : 2.4);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(isDark ? 0xd4ff32 : 0x4a7020, isDark ? 2.4 : 1.6);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(isDark ? 0x4080ff : 0x9ab8d8, isDark ? 1.2 : 0.9);
    fillLight.position.set(-6, -2, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(isDark ? 0xffffff : 0xd0e8ff, isDark ? 0.6 : 0.4);
    rimLight.position.set(0, -4, 6);
    scene.add(rimLight);

    // ════════════════════════════════════════════════════════════════════════
    //  HELPER BUILDERS
    // ════════════════════════════════════════════════════════════════════════

    /** Rounded box substitute using BoxGeometry with edge outlines */
    const makePanel = (w: number, h: number, d: number, color: number, opacity = 1.0, metalness = 0.4, roughness = 0.25) => {
      const g = trackGeo(new THREE.BoxGeometry(w, h, d));
      const m = trackMat(new THREE.MeshStandardMaterial({
        color,
        metalness,
        roughness,
        transparent: opacity < 1,
        opacity,
      }));
      return new THREE.Mesh(g, m);
    };

    const makeEdges = (mesh: THREE.Mesh, color: number, linewidth = 1) => {
      const eg = trackGeo(new THREE.EdgesGeometry(mesh.geometry as THREE.BoxGeometry));
      const em = trackMat(new THREE.LineBasicMaterial({ color, linewidth }));
      const el = new THREE.LineSegments(eg, em);
      mesh.add(el);
      return el;
    };

    /** Thin horizontal bar (UI row element) */
    const makeBar = (w: number, h: number, color: number, opacity = 1) => {
      const g = trackGeo(new THREE.PlaneGeometry(w, h));
      const m = trackMat(new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, side: THREE.DoubleSide }));
      return new THREE.Mesh(g, m);
    };

    /** Small circle dot */
    const makeDot = (r: number, color: number) => {
      const g = trackGeo(new THREE.CircleGeometry(r, 10));
      const m = trackMat(new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
      return new THREE.Mesh(g, m);
    };

    // ════════════════════════════════════════════════════════════════════════
    //  BROWSER FRAME — primary focal structure
    // ════════════════════════════════════════════════════════════════════════
    const browserGroup = new THREE.Group();
    root.add(browserGroup);

    // Frame body
    const browserBody = makePanel(3.4, 2.4, 0.07, pal.frameBg, 0.97, 0.5, 0.2);
    browserGroup.add(browserBody);
    makeEdges(browserBody, pal.frameBorder);

    // Chrome bar (top)
    const chromeBar = makePanel(3.4, 0.28, 0.08, pal.frameChrome, 1.0, 0.3, 0.3);
    chromeBar.position.set(0, 1.14, 0.005);
    browserGroup.add(chromeBar);
    makeEdges(chromeBar, pal.frameBorder);

    // Traffic-light dots
    const dotColors = [0xff5f56, 0xffbd2e, 0x27c93f];
    dotColors.forEach((c, i) => {
      const d = makeDot(0.055, c);
      d.position.set(-1.45 + i * 0.16, 1.14, 0.09);
      browserGroup.add(d);
    });

    // URL bar
    const urlBar = makePanel(1.8, 0.14, 0.02, isDark ? 0x192535 : 0xdde8f5, 1.0, 0.1, 0.9);
    urlBar.position.set(0.1, 1.14, 0.08);
    browserGroup.add(urlBar);

    // Website page content (layered bars representing UI sections)
    const contentRows = [
      { y: 0.72, w: 2.8, h: 0.32, color: isDark ? 0x1a2b45 : 0xe8f0fa, opacity: 0.9 },  // hero section
      { y: 0.32, w: 2.8, h: 0.22, color: isDark ? 0x14213a : 0xeef4fb, opacity: 0.8 },  // section 2
      { y: 0.02, w: 2.8, h: 0.18, color: isDark ? 0x101c33 : 0xf0f6fd, opacity: 0.75 }, // section 3
      { y: -0.22, w: 2.8, h: 0.14, color: isDark ? 0x0e1a30 : 0xf3f8fe, opacity: 0.7 }, // section 4
      { y: -0.44, w: 2.8, h: 0.14, color: isDark ? 0x0c182c : 0xf5f9ff, opacity: 0.65 },// section 5
      { y: -0.68, w: 2.8, h: 0.28, color: isDark ? 0x0a1525 : 0xf7faff, opacity: 0.6 }, // footer
    ];

    const contentMeshes: THREE.Mesh[] = [];
    const contentEdges: THREE.LineSegments[] = [];

    contentRows.forEach((row) => {
      const bar = makePanel(row.w, row.h, 0.01, row.color, row.opacity, 0.1, 0.9);
      bar.position.set(0, row.y, 0.045);
      browserGroup.add(bar);
      contentMeshes.push(bar);
      const e = makeEdges(bar, isDark ? 0x1e2d45 : 0xcdd9ec, 1);
      contentEdges.push(e);
    });

    // Accent bar in hero section (like a headline highlight)
    const heroAccent = makeBar(1.1, 0.045, pal.accent, 0.9);
    heroAccent.position.set(-0.75, 0.82, 0.055);
    browserGroup.add(heroAccent);

    // Small CTA button shape
    const ctaBtn = makePanel(0.42, 0.1, 0.015, pal.accent, 0.95, 0.1, 0.5);
    ctaBtn.position.set(0.9, 0.62, 0.055);
    browserGroup.add(ctaBtn);

    // Three navigation dots in top-right
    [0.6, 0.8, 1.0].forEach((x) => {
      const d = makeDot(0.03, pal.metalLight);
      d.position.set(x, 1.14, 0.09);
      browserGroup.add(d);
    });

    // Browser frame position
    browserGroup.position.set(-0.3, 0.1, 0);
    browserGroup.rotation.y = -0.12;
    browserGroup.rotation.x = 0.06;

    // ════════════════════════════════════════════════════════════════════════
    //  FLOATING UI PANEL CARDS (represent component layers)
    // ════════════════════════════════════════════════════════════════════════

    // Card 1 — floating top-left
    const card1Group = new THREE.Group();
    root.add(card1Group);

    const card1 = makePanel(1.3, 0.85, 0.05, pal.panelBg, 0.93, 0.35, 0.3);
    card1Group.add(card1);
    makeEdges(card1, pal.panelBorder);

    // Card header stripe
    const c1Header = makePanel(1.3, 0.14, 0.055, pal.frameChrome, 1.0, 0.2, 0.5);
    c1Header.position.set(0, 0.355, 0.0);
    card1Group.add(c1Header);

    // Card content rows
    [0.08, -0.12, -0.28].forEach((y, i) => {
      const w = i === 0 ? 0.9 : i === 1 ? 0.7 : 0.55;
      const b = makeBar(w, 0.045, isDark ? 0x2a3d5a : 0xbfccdd, 0.7);
      b.position.set(-0.15, y, 0.03);
      card1Group.add(b);
    });

    // Accent dot
    const c1Dot = makeDot(0.055, pal.accent);
    c1Dot.position.set(-0.52, 0.355, 0.03);
    card1Group.add(c1Dot);

    card1Group.position.set(-2.4, 0.9, 0.6);
    card1Group.rotation.y = 0.35;
    card1Group.rotation.x = -0.08;

    // Card 2 — floating bottom-right (component panel)
    const card2Group = new THREE.Group();
    root.add(card2Group);

    const card2 = makePanel(1.4, 0.95, 0.05, pal.glassPanel, 0.90, 0.4, 0.25);
    card2Group.add(card2);
    makeEdges(card2, pal.panelBorder);

    // Simulated code/data bars
    const barWidths = [0.9, 0.65, 0.78, 0.5, 0.82];
    const barColors = [pal.accent, pal.lineColor, pal.lineColor, pal.barAccent, pal.lineColor];
    barWidths.forEach((w, i) => {
      const b = makeBar(w, 0.04, barColors[i], i === 0 ? 0.9 : 0.6);
      b.position.set(-0.1 + (w - 0.9) * 0.3, 0.3 - i * 0.17, 0.03);
      card2Group.add(b);
    });

    card2Group.position.set(1.9, -0.6, 0.5);
    card2Group.rotation.y = -0.28;
    card2Group.rotation.x = 0.05;

    // Card 3 — small metrics card top-right
    const card3Group = new THREE.Group();
    root.add(card3Group);

    const card3 = makePanel(0.9, 0.6, 0.04, pal.cardSurface, 0.92, 0.3, 0.4);
    card3Group.add(card3);
    makeEdges(card3, pal.panelBorder);

    // Metric number bar (large)
    const metricBar = makePanel(0.55, 0.14, 0.045, pal.accent, 0.85, 0.1, 0.6);
    metricBar.position.set(-0.1, 0.1, 0.025);
    card3Group.add(metricBar);

    // Sub label bar
    const subBar = makeBar(0.6, 0.038, pal.lineColor, 0.5);
    subBar.position.set(-0.05, -0.1, 0.03);
    card3Group.add(subBar);

    const subBar2 = makeBar(0.4, 0.038, pal.lineColor, 0.4);
    subBar2.position.set(-0.15, -0.18, 0.03);
    card3Group.add(subBar2);

    card3Group.position.set(2.1, 1.1, 0.3);
    card3Group.rotation.y = -0.22;
    card3Group.rotation.x = -0.1;

    // ════════════════════════════════════════════════════════════════════════
    //  MOBILE DEVICE FRAME (responsive device metaphor)
    // ════════════════════════════════════════════════════════════════════════
    if (!isMobile) {
      const mobileGroup = new THREE.Group();
      root.add(mobileGroup);

      // Phone body
      const phoneBody = makePanel(0.72, 1.4, 0.055, pal.mobileBg, 0.95, 0.5, 0.2);
      mobileGroup.add(phoneBody);
      makeEdges(phoneBody, pal.mobileBorder);

      // Screen notch
      const notch = makePanel(0.22, 0.045, 0.058, pal.frameChrome, 1.0, 0.1, 0.8);
      notch.position.set(0, 0.65, 0.0);
      mobileGroup.add(notch);

      // Phone content rows (mobile UI sections)
      const mobileRows = [0.42, 0.22, 0.02, -0.18, -0.38, -0.56];
      mobileRows.forEach((y, i) => {
        const w = i === 0 ? 0.52 : i % 2 === 0 ? 0.44 : 0.38;
        const b = makeBar(w, i === 0 ? 0.1 : 0.038, isDark ? 0x1e2d45 : 0xcdd9ec, 0.6 - i * 0.05);
        b.position.set(0, y, 0.03);
        mobileGroup.add(b);
      });

      // Mobile accent CTA
      const mobileCta = makePanel(0.46, 0.1, 0.015, pal.accent, 0.9, 0.1, 0.5);
      mobileCta.position.set(0, -0.52, 0.03);
      mobileGroup.add(mobileCta);

      // Home indicator
      const homeBar = makeBar(0.22, 0.03, pal.metalLight, 0.5);
      homeBar.position.set(0, -0.63, 0.03);
      mobileGroup.add(homeBar);

      mobileGroup.position.set(-2.1, -0.4, 0.2);
      mobileGroup.rotation.y = 0.3;
      mobileGroup.rotation.x = -0.04;
    }

    // ════════════════════════════════════════════════════════════════════════
    //  GEOMETRIC CONNECTOR LINES (fine linking elements)
    // ════════════════════════════════════════════════════════════════════════
    const makeConnector = (from: THREE.Vector3, to: THREE.Vector3, color: number, opacity = 0.3) => {
      const pts = [from, to];
      const g = trackGeo(new THREE.BufferGeometry().setFromPoints(pts));
      const m = trackMat(new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
      return new THREE.Line(g, m);
    };

    // Subtle connectors: browser → cards
    if (!isMobile) {
      const conn1 = makeConnector(
        new THREE.Vector3(-1.7, 0.6, 0.6),
        new THREE.Vector3(-2.4, 0.9, 0.6),
        pal.lineColor, 0.25
      );
      root.add(conn1);

      const conn2 = makeConnector(
        new THREE.Vector3(1.4, -0.3, 0.5),
        new THREE.Vector3(1.9, -0.6, 0.5),
        pal.lineColor, 0.25
      );
      root.add(conn2);
    }

    // ════════════════════════════════════════════════════════════════════════
    //  FLOATING ACCENT PRISM (apex focal point)
    // ════════════════════════════════════════════════════════════════════════
    const prismGeom = trackGeo(new THREE.OctahedronGeometry(0.18, 0));
    const prismMat = trackMat(new THREE.MeshStandardMaterial({
      color: pal.accent,
      emissive: pal.accentGlow,
      emissiveIntensity: isDark ? 0.9 : 0.35,
      roughness: 0.08,
      metalness: 0.15,
    }));
    const prism = new THREE.Mesh(prismGeom, prismMat);
    prism.position.set(1.6, 1.5, 0.5);
    root.add(prism);

    // Small secondary orbiting accent
    const orbitGeom = trackGeo(new THREE.TetrahedronGeometry(0.09, 0));
    const orbitMat = trackMat(new THREE.MeshStandardMaterial({
      color: pal.accent,
      emissive: pal.accentGlow,
      emissiveIntensity: isDark ? 0.6 : 0.2,
      roughness: 0.1,
      metalness: 0.2,
    }));
    const orbitGem = new THREE.Mesh(orbitGeom, orbitMat);
    orbitGem.position.set(-1.6, -1.0, 0.8);
    root.add(orbitGem);

    // ════════════════════════════════════════════════════════════════════════
    //  ENTRANCE ANIMATION STATE
    // ════════════════════════════════════════════════════════════════════════
    let entranceDone = false;
    const entranceDuration = 1.4; // seconds

    root.scale.set(0.6, 0.6, 0.6);
    root.position.y = -0.5;

    // Initial render
    renderer.render(scene, camera);

    // ── Mouse / Touch interaction ────────────────────────────────────────────
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = nx * 0.28;
      targetRotX = -ny * 0.18;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ── Theme change listener ────────────────────────────────────────────────
    const refreshMaterials = () => {
      pal = getPalette(isDark);

      ambient.color.setHex(isDark ? 0x1a2540 : 0xffffff);
      ambient.intensity = isDark ? 2.0 : 2.4;
      keyLight.color.setHex(isDark ? 0xd4ff32 : 0x4a7020);
      fillLight.color.setHex(isDark ? 0x4080ff : 0x9ab8d8);

      prismMat.color.setHex(pal.accent);
      prismMat.emissive.setHex(pal.accentGlow);
      prismMat.emissiveIntensity = isDark ? 0.9 : 0.35;

      orbitMat.color.setHex(pal.accent);
      orbitMat.emissive.setHex(pal.accentGlow);
      orbitMat.emissiveIntensity = isDark ? 0.6 : 0.2;

      // Refresh browser body
      (browserBody.material as THREE.MeshStandardMaterial).color.setHex(pal.frameBg);
      (chromeBar.material as THREE.MeshStandardMaterial).color.setHex(pal.frameChrome);

      // Refresh content rows
      contentRows.forEach((row, i) => {
        const newColor = isDark
          ? [0x1a2b45, 0x14213a, 0x101c33, 0x0e1a30, 0x0c182c, 0x0a1525][i]
          : [0xe8f0fa, 0xeef4fb, 0xf0f6fd, 0xf3f8fe, 0xf5f9ff, 0xf7faff][i];
        (contentMeshes[i].material as THREE.MeshStandardMaterial).color.setHex(newColor);
      });

      (heroAccent.material as THREE.MeshBasicMaterial).color.setHex(pal.accent);
      (ctaBtn.material as THREE.MeshStandardMaterial).color.setHex(pal.accent);

      renderer.render(scene, camera);
    };

    const onThemeChange = () => {
      isDark = document.documentElement.classList.contains('dark');
      refreshMaterials();
    };
    window.addEventListener('themechange', onThemeChange);

    // ── Resize handler ───────────────────────────────────────────────────────
    const onResize = () => {
      if (!container) return;
      const w2 = container.clientWidth;
      const h2 = container.clientHeight;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
      renderer.render(scene, camera);
    };
    window.addEventListener('resize', onResize);

    // ── Visibility observer ──────────────────────────────────────────────────
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0.02 }
    );
    observer.observe(container);

    // ── Animation loop ───────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId: number;

    // Easing helper (ease-out cubic)
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // ── Entrance animation ────────────────────────────────────────────────
      if (!entranceDone) {
        const t = Math.min(elapsed / entranceDuration, 1);
        const e = easeOut(t);
        root.scale.setScalar(0.6 + e * 0.4);
        root.position.y = -0.5 + e * 0.5;
        (root as any).material?.forEach?.((m: THREE.Material) => {
          if ('opacity' in m) (m as THREE.MeshStandardMaterial).opacity = e;
        });
        if (t >= 1) entranceDone = true;
      }

      if (!reducedMotion) {
        // ── Mouse parallax ──────────────────────────────────────────────────
        currentRotX += (targetRotX - currentRotX) * 0.045;
        currentRotY += (targetRotY - currentRotY) * 0.045;

        // ── Idle gentle drift ───────────────────────────────────────────────
        const idleY = Math.sin(elapsed * 0.28) * 0.05;
        const idleX = Math.cos(elapsed * 0.20) * 0.03;

        root.rotation.y = currentRotY + idleY + 0.08;
        root.rotation.x = currentRotX + idleX;

        // ── Browser gentle float ────────────────────────────────────────────
        browserGroup.position.y = 0.1 + Math.sin(elapsed * 0.4) * 0.04;

        // ── Card 1 independent float ────────────────────────────────────────
        card1Group.position.y = 0.9 + Math.sin(elapsed * 0.55 + 0.8) * 0.05;

        // ── Card 2 independent float ────────────────────────────────────────
        card2Group.position.y = -0.6 + Math.sin(elapsed * 0.48 + 1.5) * 0.045;

        // ── Card 3 gentle drift ─────────────────────────────────────────────
        card3Group.position.y = 1.1 + Math.cos(elapsed * 0.5 + 0.3) * 0.04;

        // ── Prism spin & float ──────────────────────────────────────────────
        prism.rotation.y = elapsed * 0.85;
        prism.rotation.x = elapsed * 0.42;
        prism.position.y = 1.5 + Math.sin(elapsed * 1.2) * 0.07;

        // ── Orbit gem counter-spin ──────────────────────────────────────────
        orbitGem.rotation.y = -elapsed * 1.1;
        orbitGem.position.y = -1.0 + Math.cos(elapsed * 0.9 + 2.0) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('themechange', onThemeChange);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geo.forEach((g) => g.dispose());
      mat.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, [reducedMotion]);

  // ── WebGL fallback ────────────────────────────────────────────────────────
  if (!webglSupported) {
    return (
      <div className={`relative flex items-center justify-center p-8 ${className}`}>
        <div className="relative w-full max-w-sm aspect-square border border-border/40 rounded-2xl bg-surface/40 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-mono text-muted">
            <span>WEBSITE DESIGN · DEVELOPMENT</span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <div className="space-y-2.5 py-4">
            <div className="h-8 border border-border rounded-lg bg-surface flex items-center px-4 text-xs font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-2" />
              <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2" />
              <span className="w-2 h-2 rounded-full bg-green-400 mr-3" />
              ahmed.dev
            </div>
            {['01 · Strategy & Discovery', '02 · Design & Architecture', '03 · Front-End Engineering'].map((s) => (
              <div key={s} className="h-9 border border-border rounded-lg bg-surface flex items-center px-4 text-xs font-mono text-muted">
                {s}
              </div>
            ))}
            <div className="h-9 border border-accent/40 rounded-lg bg-accent-dim flex items-center px-4 text-xs font-mono text-accent">
              04 · Launch & Optimization
            </div>
          </div>
          <div className="text-[11px] font-mono text-muted/70 flex justify-between">
            <span>PRECISION CRAFT</span>
            <span>SCALE · PERFORMANCE</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[420px] md:min-h-[520px] select-none pointer-events-auto ${className}`}
      aria-label="Interactive 3D web design and development visualization — browser frames, UI component panels, and responsive device structures"
    />
  );
}
