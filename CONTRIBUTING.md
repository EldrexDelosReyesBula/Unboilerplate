# 🤝 Contributing to Unboilerplate

First off, thank you for considering contributing to **Unboilerplate**! 🎉 It's creators, designers, and developers like you who make this pure CSS universe vibrant and fun.

Please take a moment to review this document to understand our workflow, design philosophy, and quality standards.

---

## 🌟 Our Core Philosophy

1. **Pure CSS Always (Zero JavaScript Runtime):** Every component, animation, effect, and 3D spatial layout inside `src/` must be 100% pure CSS. No client-side scripts are bundled with the core CSS library.
2. **Human-Friendly Naming:** Class names should feel natural, intuitive, and fun (e.g. `.book-3d`, `.card-conic-glow`, `.btn-3d`, `.hover-lift`, `.text-fire`). Avoid cryptic utility shorthands.
3. **Graceful Fallbacks & Cross-Browser:** Visual effects should look stunning on modern browsers (Chrome, Safari, Firefox, Edge) while degrading gracefully on older clients.
4. **Token Driven:** Use our semantic CSS custom properties (`--ub-bg`, `--ub-surface`, `--ub-text`, `--ub-primary`, etc.) so that all components effortlessly inherit theme changes.

---

## 🛠️ Development Setup

### 1. Fork & Clone
```bash
git clone https://github.com/<your-username>/Unboilerplate.git
cd Unboilerplate
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Playground & Documentation
```bash
npm run dev
# or
npm run docs:dev
```
Open `http://localhost:4321` in your browser to test your changes with live HMR.

---

## 📁 Repository Structure

```
Unboilerplate/
├── src/                      # Source CSS Architecture
│   ├── core/                 # Tokens, resets, fluid clamps, layout primitives
│   ├── presets/              # Components, 3D spatial, aesthetics, retro, motion
│   └── themes/               # Standalone color theme presets
├── dist/                     # Compiled production CSS bundles
├── docs/                     # Astro documentation portal & Playground IDE
├── scripts/build.js          # Distribution build pipeline & minifier
└── .github/                  # Issue forms, PR templates, and discussions
```

---

## 🎨 Adding a New Component or Style

1. **Locate or Create File:** Find the relevant category folder inside `src/presets/` (e.g. `components/`, `art/`, `animations/`, `aesthetics/`).
2. **Namespace Variables:** If introducing new custom properties, prefix them with `--ub-` or component-specific scope.
3. **Respect Reduced Motion:** Always wrap intensive animations with:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .your-animated-class {
       animation: none !important;
       transition: none !important;
     }
   }
   ```
4. **Build & Verify:** Run the production build compiler:
   ```bash
   npm run build
   ```
5. **Add to Documentation & Playground:** Add snippet and live preview examples in `docs/src/pages/components/index.astro` and `docs/src/pages/playground/index.astro`.

---

## 🚀 Submitting a Pull Request (PR)

1. Create a descriptive branch:
   ```bash
   git checkout -b feat/glass-accordion
   ```
2. Commit your changes following conventional commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`):
   ```bash
   git commit -m "feat(components): add pure CSS glass accordion component"
   ```
3. Push to your fork:
   ```bash
   git push origin feat/glass-accordion
   ```
4. Open a Pull Request against `main` on [GitHub](https://github.com/EldrexDelosReyesBula/Unboilerplate).
5. Fill out the PR template checklist completely.

---

## 💬 Community & Help

- **GitHub Discussions:** [Ask questions & share ideas](https://github.com/EldrexDelosReyesBula/Unboilerplate/discussions)
- **Facebook Group:** [Join the Creator Community](https://www.facebook.com/groups/1108279171718492)
