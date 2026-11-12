# Ahmed — Website Designer & Developer | Premium 3D Portfolio

<div align="center">

[![Live Site](https://img.shields.io/badge/Live%20Site-ahmed--web--designer--developer.vercel.app-0070f3?style=for-the-badge&logo=vercel&logoColor=white)](https://ahmed-web-designer-developer.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.18-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.169.0-049EF4?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=for-the-badge)](LICENSE)

**🌐 [ahmed-web-designer-developer.vercel.app](https://ahmed-web-designer-developer.vercel.app/)**

</div>

---

## 📖 Project Overview

An immersive, bilingual (Arabic / English) personal portfolio showcasing premium web design and development work. Built with **Next.js 14 App Router**, a raw **Three.js** WebGL hero, and **GSAP ScrollTrigger** animations, it is statically exported and deployed to Vercel for near-instant global delivery.

The site is fully internationalised — every page exists under `/ar/…` and `/en/…` with native RTL support for Arabic — and ships a complete dark/light theme system driven by CSS custom properties and localStorage persistence.

| Metric | Value |
|---|---|
| Framework | Next.js 14 (App Router, Static Export) |
| Languages | Arabic (RTL) · English (LTR) |
| Total static routes | 37 |
| Case studies | 11 |
| Deployment target | Vercel |

---

## ✨ Key Features

- **Bilingual AR / EN** — Full Arabic RTL + English LTR, routed via `[locale]` dynamic segment, driven by a single `TRANSLATIONS` object.
- **Dark / Light Theme** — CSS custom properties, `ThemeProvider` context, persisted to `localStorage` with no flash on load.
- **3D WebGL Hero** — Pure Three.js scene (`HeroScene.tsx`) with proper mount/unmount cleanup; no React Three Fiber dependency.
- **GSAP Animations** — `ScrollTrigger`-powered reveal animations, staggered timelines, and branded page transitions via `PageTransitionProvider`.
- **Floating WhatsApp Button** — `FloatingWhatsApp` component wired to `+20 109 792 6288`, visible site-wide.
- **Branded Page Transitions** — `PageTransitionProvider` orchestrates route-change animations for a seamless SPA feel.
- **11 Case Studies** — Each project has a full case-study page (overview, context, challenge, strategy, design, execution, deliverables, observations, outcome) in both languages.
- **Static Site Generation (SSG)** — `output: 'export'` in Next.js config; no server runtime required.
- **SEO Metadata** — Per-page `generateMetadata()`, `sitemap.ts`, and `robots.ts` generated at build time.
- **Reduced-Motion Support** — `useReducedMotion` hook respects `prefers-reduced-motion` to disable heavy animations.

---

## 🛠 Technology Stack

### Production Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | `14.2.18` | React framework — App Router, SSG, image optimisation |
| `react` / `react-dom` | `^18.3.1` | UI library |
| `three` | `^0.169.0` | WebGL 3D graphics (hero scene) |
| `gsap` | `^3.12.5` | Animation engine — ScrollTrigger, timelines, page transitions |
| `clsx` | `^2.1.1` | Conditional className composition |
| `tailwind-merge` | `^2.5.4` | Merge Tailwind classes without conflicts |
| `lucide-react` | `^0.453.0` | Icon library |

### Development Dependencies

| Package | Version | Purpose |
|---|---|---|
| `typescript` | `^5.6.3` | Static typing |
| `tailwindcss` | `^3.4.14` | Utility-first CSS framework |
| `autoprefixer` / `postcss` | latest | CSS processing pipeline |
| `@types/three` | `^0.169.0` | Three.js TypeScript definitions |
| `@types/react` / `@types/react-dom` / `@types/node` | latest | React & Node type definitions |

---

## 🗂 Project Architecture

```
web portfolio/
├── public/
│   └── images/projects/        # Project preview & gallery images
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (HTML shell)
│   │   ├── not-found.tsx       # 404 page
│   │   ├── robots.ts           # Robots.txt generator
│   │   ├── sitemap.ts          # XML sitemap generator (37 routes)
│   │   └── [locale]/           # Internationalised routes (ar | en)
│   │       ├── layout.tsx      # Locale layout (dir, lang, ThemeProvider, providers)
│   │       ├── page.tsx        # Home page
│   │       ├── about/
│   │       │   └── page.tsx
│   │       ├── contact/
│   │       │   └── page.tsx
│   │       ├── services/
│   │       │   └── page.tsx
│   │       └── work/
│   │           ├── page.tsx    # Work index / portfolio grid
│   │           └── [slug]/     # Dynamic case-study pages (11 projects)
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroScene.tsx               # Three.js WebGL hero canvas
│   │   ├── animation/
│   │   │   ├── MotionProvider.tsx          # GSAP context / plugin registration
│   │   │   └── PageTransitionProvider.tsx  # Route-change transition overlay
│   │   ├── brand/
│   │   │   └── BrandLogo.tsx
│   │   ├── case-study/
│   │   │   └── CaseStudyView.tsx           # Full case-study page template
│   │   ├── common/
│   │   │   └── FloatingWhatsApp.tsx        # Persistent WhatsApp CTA
│   │   ├── contact/
│   │   │   └── ContactForm.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── LocaleProvider.tsx          # Locale context
│   │   │   ├── LocaleSwitcher.tsx          # AR ↔ EN switcher UI
│   │   │   ├── MobileNav.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── ThemeToggle.tsx             # Dark/light toggle button
│   │   ├── sections/                       # Home-page section components
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutOverview.tsx
│   │   │   ├── Capabilities.tsx
│   │   │   ├── ContactCta.tsx
│   │   │   ├── Credibility.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── Methodology.tsx
│   │   │   └── ServicesOverview.tsx
│   │   └── work/
│   │       └── WorkGrid.tsx
│   ├── data/
│   │   ├── projects.ts         # PROJECTS array — 11 ProjectData objects
│   │   └── translations.ts     # TRANSLATIONS object (all UI strings, AR + EN)
│   ├── hooks/
│   │   ├── useReducedMotion.ts # Respects prefers-reduced-motion
│   │   └── useTheme.ts         # Theme state + toggle logic
│   ├── lib/
│   │   ├── types.ts            # ProjectData, ServiceItem, NavItem, Locale types
│   │   └── utils.ts            # Shared utility functions
│   └── styles/
│       └── globals.css         # CSS custom properties, base styles, dark/light tokens
├── next.config.js              # output: 'export', image config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or `pnpm` / `yarn`)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd "web portfolio"

# Install dependencies
npm install
```

### Available Scripts

```bash
# Start the development server (http://localhost:3000)
npm run dev

# Build the static site → ./out/
npm run build

# Serve the built output locally
npm run start

# Run ESLint
npm run lint
```

> [!NOTE]
> `npm run build` performs a full static export. The production-ready site is emitted to the `out/` directory and is ready for Vercel or any static host.

---

## 🌍 Environment Variables

**None required.** This is a fully static build — there are no API keys, database connections, or secrets. No `.env.local` file is needed to build or run the project.

---

## 🌐 Internationalization

The site supports **Arabic (RTL)** and **English (LTR)** via Next.js App Router's `[locale]` dynamic segment.

### How it works

```
/ar/            → Arabic home page (dir="rtl", lang="ar")
/en/            → English home page (dir="ltr", lang="en")
/ar/work/slug   → Arabic case study
/en/work/slug   → English case study
```

### Translation file

All UI strings live in a single source of truth:

**`src/data/translations.ts`**

```ts
export const TRANSLATIONS = {
  ar: {
    nav: { home: 'الرئيسية', work: 'الأعمال', ... },
    hero: { headline: '...', subheadline: '...' },
    // ...
  },
  en: {
    nav: { home: 'Home', work: 'Work', ... },
    hero: { headline: '...', subheadline: '...' },
    // ...
  },
};
```

The `LocaleProvider` context distributes the active locale and its translations to every component. The `LocaleSwitcher` component toggles between routes while preserving the current path.

---

## 🎨 Theme System

### Architecture

| Layer | File | Role |
|---|---|---|
| CSS tokens | `src/styles/globals.css` | Defines `--color-bg`, `--color-text`, `--color-accent`, etc. under `:root` (light) and `.dark` |
| Theme hook | `src/hooks/useTheme.ts` | Reads/writes `theme` from `localStorage`, applies `.dark` class to `<html>` |
| Provider | `src/components/layout/ThemeToggle.tsx` | UI toggle button, calls `useTheme` |
| Persistence | `localStorage` key: `theme` | Survives page refresh; avoids flash via inline script in root layout |

### Switching themes

```ts
// useTheme.ts (simplified)
const toggleTheme = () => {
  const next = theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  localStorage.setItem('theme', next);
  document.documentElement.classList.toggle('dark', next === 'dark');
};
```

---

## 📁 Managing Portfolio Projects

All case studies are stored as plain TypeScript objects in **`src/data/projects.ts`**:

```ts
import { ProjectData } from '@/lib/types';

export const PROJECTS: ProjectData[] = [
  {
    slug: 'my-new-project',          // URL: /en/work/my-new-project
    title:    { ar: 'عنوان', en: 'Title' },
    subtitle: { ar: 'وصف', en: 'Subtitle' },
    summary:  { ar: '...', en: '...' },
    sector: {
      key: 'saas-tech',
      label: { ar: 'تقنية', en: 'SaaS & Tech' },
    },
    classification: {
      key: 'client-project',
      label: { ar: 'مشروع عميل', en: 'Client Project' },
    },
    market:    { ar: 'مصر', en: 'Egypt' },
    languages: { ar: 'العربية والإنجليزية', en: 'Arabic & English' },
    role:      { ar: 'تطوير', en: 'Development' },
    liveUrl:   'https://example.com',    // optional
    previewImage:  '/images/projects/my-project.png',
    galleryImages: ['/images/projects/my-project.png'],
    featured: false,
    order: 12,
    year: '2026',
    overview:    { ar: '...', en: '...' },
    context:     { ar: '...', en: '...' },
    challenge:   { ar: '...', en: '...' },
    strategy:    { description: { ar: '...', en: '...' }, points: [] },
    designAndUx: { description: { ar: '...', en: '...' }, points: [] },
    execution:   { description: { ar: '...', en: '...' }, points: [] },
    deliverables:  { ar: [], en: [] },
    observations:  { ar: '...', en: '...' },
    outcomeNotes:  { ar: '...', en: '...' },
  },
];
```

### `ProjectData` interface (key fields)

| Field | Type | Required | Notes |
|---|---|---|---|
| `slug` | `string` | ✅ | Unique URL segment |
| `title` / `subtitle` / `summary` | `LocalizedString` | ✅ | `{ ar, en }` |
| `sector.key` | `BusinessSectorKey` | ✅ | One of 11 sector constants |
| `classification.key` | `ProjectClassificationKey` | ✅ | `client-project` or `independent-concept` |
| `previewImage` | `string` | ✅ | Relative to `/public` |
| `featured` | `boolean` | ✅ | Shown on home FeaturedWork section |
| `order` | `number` | ✅ | Sort order in WorkGrid |
| `liveUrl` | `string` | ❌ | Optional live project URL |

Place the preview image in `public/images/projects/` and run `npm run build` — the new case-study page is generated automatically.

---

## 📞 Contact Information Configuration

Contact details appear in two places. Update both when changing:

### 1. `FloatingWhatsApp` button — `src/components/common/FloatingWhatsApp.tsx`

```tsx
const WHATSAPP_NUMBER = '+201097926288';  // +20 109 792 6288
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
```

### 2. Contact page — `src/app/[locale]/contact/page.tsx`

```tsx
const EMAIL    = 'ah.dev.3@gmail.com';
const WHATSAPP = '+20 109 792 6288';
```

---

## 🎬 3D & Animation Architecture

### Three.js Hero Scene

The 3D hero is implemented in **`src/components/3d/HeroScene.tsx`** using the **raw Three.js API** — no React Three Fiber. This keeps the bundle lean and gives full low-level control over the WebGL context.

**Cleanup pattern** (critical to avoid memory leaks on route change):

```tsx
useEffect(() => {
  const { scene, renderer, camera, animationId } = initScene(canvasRef.current);

  return () => {
    // Dispose geometries, materials, textures
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        (obj.material as THREE.Material).dispose();
      }
    });
    renderer.dispose();
    cancelAnimationFrame(animationId);
  };
}, []);
```

### GSAP Animations

- **`MotionProvider.tsx`** — registers GSAP plugins (ScrollTrigger, etc.) once at the app level.
- **`PageTransitionProvider.tsx`** — wraps route changes in a branded overlay animation using GSAP timelines.
- **`useReducedMotion.ts`** — returns `true` when `prefers-reduced-motion: reduce` is set; components use this to skip or shorten animations.

```ts
// useReducedMotion.ts
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

---

## 🔍 SEO & Performance

| Feature | Implementation |
|---|---|
| Per-page metadata | `generateMetadata()` exported from each `page.tsx` |
| XML Sitemap | `src/app/sitemap.ts` — covers all 37 static routes |
| Robots.txt | `src/app/robots.ts` |
| Static export | `output: 'export'` → zero server runtime, CDN-cacheable |
| 37 static routes | `[locale]` × 2 languages × (home, about, contact, services, work, 11 case-study slugs) |
| OG / Twitter cards | Defined per page via `generateMetadata` |
| No external data at runtime | All content is embedded at build time |

---

## ☁️ Deployment

The site is deployed to **Vercel** and rebuilds automatically on every push to `main`.

### Manual build & preview

```bash
# 1. Build — produces ./out/
npm run build

# 2. Preview locally (requires a static server)
npx serve out
```

### Vercel configuration

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `out` |
| Node.js Version | 18.x |
| Environment Variables | None required |

> [!TIP]
> Vercel detects Next.js automatically. No `vercel.json` is needed for the default static export configuration.

---

## 🔧 Maintenance & Troubleshooting

### Common tasks

| Task | Action |
|---|---|
| Add a project | Edit `src/data/projects.ts`, add image to `public/images/projects/` |
| Add a UI string | Add to both `ar` and `en` keys in `src/data/translations.ts` |
| Change contact info | Update `FloatingWhatsApp.tsx` and `contact/page.tsx` |
| Change theme colours | Edit CSS variables in `src/styles/globals.css` |
| Rebuild & deploy | Push to `main` → Vercel auto-deploys |

### Common issues

#### WebGL not rendering (blank hero)

- Ensure the browser supports WebGL 2 (all modern browsers do).
- The scene initialises on `useEffect` after hydration; a brief blank state before canvas paint is expected.
- The component gracefully skips Three.js init when `canvasRef.current` is `null` (SSR guard).

#### Animations not playing

- Check whether `useReducedMotion` returns `true` — animations are intentionally suppressed when the OS accessibility setting **"Reduce motion"** is enabled.
- Confirm `MotionProvider` wraps the component tree (registered in `[locale]/layout.tsx`).

#### Build error: `window is not defined`

- Three.js and GSAP must only be instantiated inside `useEffect` (client-side). Never call them at module scope or during SSR. All existing components follow this pattern.

#### `out/` directory is stale

```bash
# Clean and rebuild
Remove-Item -Recurse -Force .next, out
npm run build
```

---

## 📄 License

**All rights reserved. © 2026 Ahmed.**

This codebase, its design system, written content (case studies, translations), and all associated assets are the exclusive property of Ahmed. No part of this project may be reproduced, distributed, or used without explicit written permission.

---

<div align="center">

Made with ♥ by **Ahmed** · [ahmed-web-designer-developer.vercel.app](https://ahmed-web-designer-developer.vercel.app/)

</div>
