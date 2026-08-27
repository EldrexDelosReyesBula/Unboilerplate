# 🎯 UNBOILERPLATE

> *"CSS that basically styles itself — Style without thinking. Think without boilerplate."*
>
> Created by **Eldrex Delos Reyes Bula**
> A pure CSS styling universe designed for Gen Z creators, artists, aesthetic lovers, and clean code enthusiasts.

[![npm version](https://img.shields.io/npm/v/@eldrex/unboilerplate.svg?color=00f2fe&label=npm)](https://www.npmjs.com/package/@eldrex/unboilerplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-ff007f.svg)](LICENSE)
[![Zero JS](https://img.shields.io/badge/Zero-JavaScript-00ffa3.svg)](https://unboilerplate.vercel.app)

---

## 🤯 The "Wait, That's It?" Philosophy

You know how Apple products just... work? You don't read a manual for an iPhone. You just touch it and go.

**That's Unboilerplate.**

```html
<!-- That's it. That's literally it. -->
<div class="card">✨</div>

<!-- Need it prettier? -->
<div class="card pretty">✨</div>

<!-- Need it animated? -->
<div class="card pretty float">✨</div>

<!-- Need a whole section? -->
<section class="hero">✨</section>
```

**No thinking. Just typing. Done.**

---

## 🎯 The One-Class Wonder System

### Everything is ONE word

```html
<!-- LAYOUT - one word each -->
<header class="hero">Hero section, auto-styled</header>
<nav class="navbar">Navigation, responsive by default</nav>
<main class="gallery">Auto-grid gallery</main>
<section class="features">Feature section</section>
<footer class="footer">Auto-footer</footer>

<!-- Microscopic Elements -->
<button class="btn">Click</button>
<input class="input">
<img class="pic">
<h1 class="title">Hello</h1>
<p class="text">Content</p>
<a class="link">Link</a>
```

---

## ✨ Feature Overview

| Feature | Description |
|---|---|
| 🎯 **One-Class Wonder** | `.card`, `.btn`, `.navbar`, `.hero`, `.gallery`, `.footer` — styles itself |
| 🎬 **Micro-Animations** | `.hover-lift`, `.hover-glow`, `.tap-pop`, `.animate-float`, `.loader-heart` |
| 🧈 **Butter Motion** | `.smooth-butter`, `.smooth-spring`, fluid responsive typography clamps |
| 🧊 **3D Dimension System** | GPU-accelerated flip cards, books, cubes, orbital carousels |
| 🕹️ **Time Machine** | Windows 95, CRT screens, Winamp, GeoCities — faithfully recreated |
| 🌈 **Aesthetic Themes** | Cyberpunk, Cottagecore, Dark Academia, Clean Girl, Y2K |
| 📐 **Design Tokens** | 60+ `--ub-*` CSS custom properties for complete theming |
| 💎 **Zero JavaScript** | Every effect is pure CSS — no runtime, no bloat |
| 🚀 **Interactive Playground** | Visual preset selector, custom classes, and Monaco-powered IDE |

---

## ⚡ Quick Start

### 1. CDN (Fastest — Zero Setup)

Add to your HTML `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@eldrex/unboilerplate@1.0.0/dist/unboilerplate.min.css">
```

### 2. npm

```bash
npm install @eldrex/unboilerplate
```

Import in JavaScript/TypeScript:

```javascript
import '@eldrex/unboilerplate';
```

Import in CSS:

```css
@import '@eldrex/unboilerplate';
```


### 3. Selective Imports

Import only what you need for smaller bundles:

```css
/* Core utilities + tokens only */
@import '@eldrex/unboilerplate/core';

/* Aesthetic packs only (themes, retro, 3D) */
@import '@eldrex/unboilerplate/aesthetics';
```

---

## 🚀 Interactive Playground & Web IDE

Experience the live **Unboilerplate Playground** equipped with **Monaco Editor**, custom IntelliSense, multi-viewport device testing, and **Pure CSS Creative Presets**:

👉 **Launch Playground**: [https://unboilerplate.vercel.app/playground](https://unboilerplate.vercel.app/playground)

---

## 📚 Class Reference (Top 30 Most-Used)

| Class | Category | Description |
|---|---|---|
| `.vibe-card` | Components | Glassmorphic surface card with border + glass bg |
| `.vibe-btn` | Components | Primary gradient action button with spring press |
| `.vibe-badge` | Components | Small label chip / tag |
| `.vibe-grid` | Layout | Responsive auto-fill grid (minmax 280px, 1fr) |
| `.stack` | Layout | Flex column stack (display: flex; flex-direction: column) |
| `.center` | Layout | Flex centering both axes |
| `.flex` | Layout | display: flex |
| `.effect-glass` | Effects | Frosted glass backdrop-filter blur |
| `.hover-glow` | Effects | Neon cyan box-shadow glow on hover |
| `.hover-bounce` | Effects | Spring scale-up pop on hover |
| `.text-gradient` | Effects | Cyan-to-blue gradient text fill |
| `.text-neon` | Effects | High-voltage neon cyan text glow |
| `.text-rainbow` | Effects | Infinite hue-rotating rainbow gradient text |
| `.ambient-float` | Animation | Slow sinusoidal vertical float loop |
| `.marquee` | Animation | GPU-accelerated smooth horizontal scrolling |
| `.particles-3d` | Animation | Pure CSS 3D floating particle universe |
| `.card-3d-flip` | 3D | Hardware-accelerated 180° card flip on hover |
| `.book-3d` | 3D | Interactive 3D book that opens on hover |
| `.cube-3d` | 3D | Auto-rotating 6-face 3D CSS cube |
| `.btn-3d` | 3D | Physical extruded tactile button |
| `.card-conic-glow` | Effects | Infinite rotating conic gradient border |
| `.window-95` | Retro | Authentic Windows 95 beveled window frame |
| `.crt-screen` | Retro | CRT monitor viewport with phosphor glow |
| `.winamp-player` | Retro | Classic Winamp media player skin UI |
| `.site-retro` | Retro | 1999 GeoCities-era homepage container |
| `.theme-cyberpunk` | Themes | Cyberpunk neon/void aesthetic mode |
| `.brutal-neo` | Effects | Neo-brutalism hard shadow card |
| `.polaroid-stack` | Art | Scattered polaroid photo gallery |
| `.canvas` | Art | Photoshop-like layer context container |
| `.vapor-sunset` | Effects | Vaporwave 80s retro gradient card |

> 📖 **Full reference**: [unboilerplate.vercel.app/docs](https://unboilerplate.vercel.app/docs)

---

## 🎨 Pure CSS Creative Universe

```html
<!-- Photoshop-like Image Layering & Blend Modes -->
<div class="canvas canvas-landscape">
  <img src="background.jpg" class="layer-back">
  <img src="person.png" class="layer-mid">
  <img src="sparkles.png" class="layer-front blend-screen">
</div>

<!-- Pure CSS 3D Particle System -->
<div class="particles-3d">
  <div class="particle --float-slow">✦</div>
  <div class="particle --spin">💫</div>
  <div class="particle --orbit">✨</div>
</div>

<!-- 1999 Personal Homepage -->
<div class="site-retro">
  <h1 class="text-rainbow">~*~ Welcome to My Site ~*~</h1>
  <div class="marquee"><span>Thanks for visiting! Sign my guestbook!</span></div>
  <button class="btn-3d">🏠 Enter</button>
  <div class="visitor-counter"><span class="counter-digits">000420</span></div>
</div>
```

---

## 🧊 The Dimension System (3D & 2D)

```html
<!-- 3D Card Flip on Hover -->
<div class="card-3d-flip">
  <div class="card-3d-inner">
    <div class="card-3d-front">
      <h3>Front Face</h3>
    </div>
    <div class="card-3d-back">
      <h3>Back Face</h3>
    </div>
  </div>
</div>

<!-- Tactile Physical 3D Button -->
<button class="btn-3d">Press Me 🚀</button>

<!-- Auto-Rotating 3D Cube -->
<div class="cube-3d-scene">
  <div class="cube-3d">
    <div class="cube-face --front">F</div>
    <div class="cube-face --back">B</div>
    <div class="cube-face --left">L</div>
    <div class="cube-face --right">R</div>
    <div class="cube-face --top">T</div>
    <div class="cube-face --bottom">Bot</div>
  </div>
</div>
```

---

## 🎨 Design Movements Built-In

```html
<!-- Neo-Brutalism -->
<div class="brutal-neo p-6">
  <h3>Neo-Brutalist Card</h3>
  <button class="btn-brutal">CLICK ME</button>
</div>

<!-- Skeuomorphism -->
<div class="card-wood p-6">
  <button class="btn-leather">Leather Button</button>
</div>

<!-- Vaporwave -->
<div class="vapor-sunset p-6 rounded-xl">
  <h1 class="vapor-chrome">Vaporwave Aesthetic</h1>
</div>

<!-- Cyberpunk Theme -->
<div class="theme-cyberpunk p-6">
  <h2 class="text-neon">NEO TOKYO 2099</h2>
</div>
```

---

## 🔧 Token Customization Guide

Every visual property in Unboilerplate is driven by CSS custom properties with the `--ub-` namespace. Override any token to retheme the system globally or locally.

### Global Theme Override

Add this to your own stylesheet **after** the Unboilerplate import:

```css
:root {
  /* Change the primary background */
  --ub-bg: #ffffff;
  --ub-bg-surface: #f5f5f5;
  --ub-text: #0a0a0e;
  --ub-text-muted: #6b7280;

  /* Change accent color */
  --ub-accent: #8b5cf6;
  --ub-focus-ring: #8b5cf6;

  /* Change glass values */
  --ub-glass-bg: rgba(255, 255, 255, 0.6);
  --ub-glass-blur: 20px;
}
```

### Scoped Component Override

Override tokens inline on any element — children inherit the scoped values:

```html
<!-- Light card on dark page -->
<div class="vibe-card" style="--ub-bg-surface: #fff; --ub-text: #000;">
  Light themed card
</div>

<!-- Hot pink accent section -->
<section style="--ub-accent: #f43f5e; --ub-focus-ring: #f43f5e;">
  <button class="vibe-btn">Pink Accent Button</button>
</section>
```

### Key Tokens Reference

| Token | Default | Purpose |
|---|---|---|
| `--ub-bg` | `#0d0e15` | Page background |
| `--ub-bg-surface` | `#1c1e2e` | Card/surface background |
| `--ub-text` | `#f3f4f8` | Primary text |
| `--ub-text-muted` | `#9499ad` | Muted/secondary text |
| `--ub-accent` | `#ff007f` | Primary accent |
| `--ub-focus-ring` | `#00f2fe` | Focus/interactive cyan |
| `--ub-glass-blur` | `16px` | Backdrop-filter blur amount |
| `--ub-transition-spring` | `500ms cubic-bezier(0.34,1.56,0.64,1)` | Spring easing |
| `--ub-radius-lg` | `20px` | Large border radius |

> 📖 **Full token list**: [unboilerplate.vercel.app/docs#tokens](https://unboilerplate.vercel.app/docs#tokens)

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome 88+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 15.4+ | ✅ Full (`backdrop-filter` requires) |
| Edge 88+ | ✅ Full |
| Samsung Internet 14+ | ✅ Full |
| Opera 74+ | ✅ Full |

> **Note:** `backdrop-filter` (glass effects) requires a Chromium or WebKit browser. Firefox 126+ added `backdrop-filter` support. Fallback graceful degradation is included.

---

## 🛠️ Building

```bash
# Install dependencies
npm install

# Build the CSS bundles into dist/
npm run build

# Run docs dev server
npm run docs:dev

# Build docs site
npm run docs:build
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/my-class`)
3. **Add** your CSS classes to the appropriate file in `src/`
4. **Test** using the Playground in `docs/`
5. **Document** your classes — add entries to the relevant docs page
6. **Submit** a Pull Request

### Contribution Guidelines

- All classes must be pure CSS — no JavaScript dependencies
- Follow the `--ub-` namespace for new CSS custom properties
- Use BEM-style `--modifier` classes for variants
- Test across Chrome, Firefox, and Safari before submitting
- Add `will-change: transform` and `backface-visibility: hidden` to all 3D transforms
- Respect `@media (prefers-reduced-motion: reduce)` for animations

---

## 📄 License

MIT © [Eldrex Delos Reyes Bula](https://unboilerplate.vercel.app)

---

*"CSS is boring. Your designs shouldn't be."*
