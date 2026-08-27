# 📜 Changelog

All notable changes to **Unboilerplate** are documented in this file.

The project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-08-27 — *Initial Release: Pure CSS Framework*

### 🚀 Overview
**Unboilerplate v1.0.0** is the official initial release of the pure CSS framework that makes web styling intuitive, expressive, and fun with zero build tools, zero runtime dependencies, and zero JavaScript required.

---

### 🏛️ Core Foundations & Design Token Architecture
- **Cascading Design Tokens:** Unified semantic CSS custom properties (`--ub-bg`, `--ub-surface`, `--ub-surface-2`, `--ub-text`, `--ub-text-muted`, `--ub-primary`, `--ub-border`, `--ub-radius`).
- **Zero-Specificity Multi-Theme System:** Instant theme switching via `[data-theme="..."]` and body presets (Default Dark, Default Light, Cyberpunk HUD, Pastel Dream, Sunset Dusk, Clean Girl Minimalist).
- **Responsive Layout Primitives:** Fluid flexbox and grid helpers (`.flex`, `.stack`, `.vibe-grid`, `.split-2`, `.split-3`, `.center`, `.between`, `.container`, `.p-4`, `.p-6`, `.gap-2`, `.gap-4`).
- **Typography & Resets:** Natural modern font stacks, fluid headings, readable prose scales, and clean HTML5 semantic resets.

---

### 🧊 3D Spatial Systems & Canvas Layers
- **Interactive 3D Book (`.book-3d` / `.book`):** Physical hardbound 3D book with realistic progressive page turns, spine-anchored cover, aged parchment lighting, zero backwards mirrored text bleed, and optional `.is-open` JavaScript toggle.
- **180° VIP Perspective Flip Card (`.card-3d-flip`):** Front-to-back perspective flip on hover with holographic metallic finish.
- **3D Orbital Planet Ring Carousel (`.carousel-3d`):** 3D ring carousel with smooth hover pause.
- **Six-Face Rotating Cube Scene (`.cube-3d-scene`, `.cube-3d`):** Hardware-accelerated perspective cube.
- **Dynamic Photography Deck (`.image-stack-3d`):** Photography deck dynamically fanning out with spatial perspective on hover.
- **Photoshop Layer Sandwich (`.canvas`):** Multi-tier layer blending (`.layer-back`, `.layer-mid`, `.layer-front`) supporting native CSS blend modes (`.blend-screen`, `.blend-overlay`, `.blend-multiply`).

---

### 🎭 Aesthetic Movements & Skeuomorphism
- **Neo-Brutalism (`.brutal-neo`, `.btn-brutal`):** 6px hard offset drop shadows, 3px solid black borders, and bold high-contrast confidence.
- **1990s Memphis Pop (`.memphis-pattern`):** Playful geometric patterns with vibrant shapes and confetti accents.
- **Vaporwave Sunset (`.vapor-sunset`, `.vapor-chrome`):** 80s dusk horizon grid with liquid chrome typography.
- **Mahogany Skeuomorphism (`.card-wood`, `.btn-leather`):** Handcrafted mahogany woodgrain and stitched vintage leather buttons.
- **Conic Rotating Glow (`.card-conic-glow`):** Continuous 360° gradient perimeter glow.
- **Glassmorphic Panels (`.card-glass`, `.glass-panel`, `.effect-glass`):** Frosted translucent glass with backdrop blur filters and rim highlights.

---

### 🕹️ Retro Systems & Nostalgic Time Machine
- **Windows 95 Window Frame (`.window-95`):** Classic beveled titlebars, minimize/maximize/close buttons, and system content panels.
- **Curved Cathode-Ray CRT Displays (`.crt-screen`):** Phosphor scanline overlays (`.crt-scanlines`), flicker animation (`.crt-flicker`), in green (`.crt--green`) and amber (`.crt--amber`).
- **Winamp 2005 Media Player (`.winamp-player`):** Authentic player skin with animated graphic equalizer bars (`.winamp-eq`).
- **LED Visitor Hit Counter (`.visitor-counter`):** 90s digital web counter badge.
- **Hardware Scrolling Marquee (`.marquee`):** GPU-composited continuous scrolling banner with `.marquee.--neon` and `.marquee.--pause-hover`.
- **1999 Personal GeoCities Card (`.site-retro`):** Nostalgic homepage container with `.text-rainbow` animated heading.

---

### ⚡ Motion Engine, Particles & Shaders
- **Floating 3D Particle Universe (`.particles-3d`):** Zero-JS floating stars and cosmic particles with `.--float-slow`, `.--float-medium`, `.--float-fast`, `.--spin`, and `.--orbit`.
- **Twinkling Starfields (`.particles-stars`):** Multi-cycle celestial twinkle effects (`.--twinkle-1`, `.--twinkle-2`, `.--twinkle-3`).
- **Pure CSS Typewriter Animation (`.text-animate.--typewriter`):** Automated headline typing animation with blinking cursor.
- **Stacked Polaroids (`.polaroid-stack`):** Analog photo frames with physical rotation offsets and spring hover elevation.
- **Live Status Indicator Dots:** `.blink`, `.blink.--neon`, and `.blink.--soft`.
- **Typography Shaders:** High-impact text glow shaders: `.text-gradient`, `.text-fire`, `.text-ice`, `.text-neon`, `.text-3d`.

---

### 🛠️ Interactive Playground Studio & CDN Distribution
- **In-Browser Studio Playground (`/playground`):** Live split-pane editor with Monaco Editor support, mobile tab switcher, and zero-bleed live DOM stage.
- **One-Click Format & Copy:** Integrated code beautifier and 1-click clipboard export with selectable `@latest` / `@1.0.0` CDN tag injection.
- **10 Curated Starter Templates:** Ready-to-use production designs (Bento SaaS, Cyberpunk HUD, Neo-Brutalist Studio, Glassmorphic Landing, Artisan Roastery, 1999 Personal Site, Quantum Docs, etc.).
- **6-Category Component Library (`/components`):** 25+ copy-paste building blocks with interactive live previews.
- **CDN Distribution:** Available via jsDelivr:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eldrex/unboilerplate@1.0.0/dist/unboilerplate.min.css">
  ```
