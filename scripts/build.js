/**
 * UNBOILERPLATE - Zero-dependency Production CSS Bundler & Minifier
 * Fast, reliable, pure-Node build engine with import inlining and asset verification.
 * 
 * Author: Eldrex Delos Reyes Bula
 * https://unboilerplate.vercel.app
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');
const distThemesDir = path.join(distDir, 'themes');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Recursively resolves and inlines all CSS @import statements.
 */
function resolveImports(filePath, seen = new Set()) {
  const fullPath = path.resolve(filePath);
  if (seen.has(fullPath)) return '';
  seen.add(fullPath);

  if (!fs.existsSync(fullPath)) {
    console.error(`[unboilerplate] ⚠️ File not found: ${fullPath}`);
    return '';
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  const dir = path.dirname(fullPath);

  return content.replace(/@import\s+['"](.+?)['"];?/g, (_, importPath) => {
    const targetPath = path.resolve(dir, importPath);
    return resolveImports(targetPath, seen);
  });
}

/**
 * Production-grade safe CSS minifier.
 * Strips comments, collapses whitespace, cleans delimiters, and preserves calc() operators.
 */
function minifyCSS(css) {
  if (!css || typeof css !== 'string') return '';

  return css
    // 1. Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // 2. Normalize all whitespace (newlines, tabs, multiple spaces) to single space
    .replace(/\s+/g, ' ')
    // 3. Remove space around structural delimiters { } ; ,
    .replace(/\s*([\{\}\;\,])\s*/g, '$1')
    // 4. Clean colon spaces safely (handle declaration colons while preserving pseudo-classes)
    .replace(/:\s+/g, ':')
    .replace(/\s+:/g, ':')
    // 5. Remove spaces around opening/closing parentheses (except within calc/clamp expressions)
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    // 6. Ensure mandatory spaces around + and - inside calc/clamp math
    .replace(/(\d+(?:rem|px|vw|vh|%|em))\s*([\+\-])\s*(\d+(?:rem|px|vw|vh|%|em))/g, '$1 $2 $3')
    // 7. Remove duplicate semicolons and trailing semicolon before closing brace
    .replace(/;+/g, ';')
    .replace(/;\}/g, '}')
    // 8. Remove empty rules (e.g. .class{})
    .replace(/[^{}\;]+{\s*}/g, '')
    .trim();
}

function getHeader(title) {
  return `/**
 * UNBOILERPLATE - ${title}
 * Style without thinking. Think without boilerplate.
 * Author: Eldrex Delos Reyes Bula
 * https://unboilerplate.vercel.app
 * License: MIT
 */\n`;
}

function copyThemes() {
  ensureDir(distThemesDir);
  const themesDir = path.join(srcDir, 'themes');
  if (fs.existsSync(themesDir)) {
    const themeFiles = fs.readdirSync(themesDir).filter(f => f.endsWith('.css'));
    for (const file of themeFiles) {
      const themeContent = fs.readFileSync(path.join(themesDir, file), 'utf8');
      fs.writeFileSync(
        path.join(distThemesDir, file),
        getHeader(`Theme: ${path.basename(file, '.css')}`) + themeContent,
        'utf8'
      );
    }
  }
}

function build() {
  console.log('⚡ Building UNBOILERPLATE Production Distribution Artifacts...\n');
  const startTime = Date.now();

  ensureDir(distDir);

  // 1. Full Master Bundle (unminified + minified)
  const fullCSS = resolveImports(path.join(srcDir, 'unboilerplate.css'));
  const fullWithHeader = getHeader('Master Bundle') + fullCSS;
  const fullMinCSS = getHeader('Master Bundle (Minified)') + minifyCSS(fullCSS);

  fs.writeFileSync(path.join(distDir, 'unboilerplate.css'), fullWithHeader, 'utf8');
  fs.writeFileSync(path.join(distDir, 'unboilerplate.min.css'), fullMinCSS, 'utf8');

  // 2. Core Framework Bundle (unminified + minified)
  const coreCSS = resolveImports(path.join(srcDir, 'index.css'));
  const coreWithHeader = getHeader('Core Framework') + coreCSS;
  const coreMinCSS = getHeader('Core Framework (Minified)') + minifyCSS(coreCSS);

  fs.writeFileSync(path.join(distDir, 'unboilerplate.core.css'), coreWithHeader, 'utf8');
  fs.writeFileSync(path.join(distDir, 'unboilerplate.core.min.css'), coreMinCSS, 'utf8');

  // 3. Aesthetics Bundle (unminified + minified)
  const aestheticsFiles = ['cyberpunk.css', 'cottagecore.css', 'y2k.css', 'dark-academia.css', 'clean-girl.css'];
  let aestheticsCSS = '';
  for (const file of aestheticsFiles) {
    const p = path.join(srcDir, 'presets', 'aesthetics', file);
    if (fs.existsSync(p)) {
      aestheticsCSS += fs.readFileSync(p, 'utf8') + '\n\n';
    }
  }
  const aestheticsWithHeader = getHeader('Aesthetic Presets') + aestheticsCSS;
  const aestheticsMinCSS = getHeader('Aesthetic Presets (Minified)') + minifyCSS(aestheticsCSS);

  fs.writeFileSync(path.join(distDir, 'unboilerplate.aesthetics.css'), aestheticsWithHeader, 'utf8');
  fs.writeFileSync(path.join(distDir, 'unboilerplate.aesthetics.min.css'), aestheticsMinCSS, 'utf8');

  // 4. Standalone Theme Files
  copyThemes();

  // Print Summary Table
  console.log('📦 Generated Distribution Artifacts:');
  console.log('─────────────────────────────────────────────────────────────────');
  
  const allDistFiles = fs.readdirSync(distDir);
  for (const item of allDistFiles) {
    const itemPath = path.join(distDir, item);
    const stats = fs.statSync(itemPath);
    if (stats.isFile()) {
      const kb = (stats.size / 1024).toFixed(2);
      console.log(`  ✓ dist/${item.padEnd(34)} ${kb.padStart(7)} KB`);
    } else if (stats.isDirectory()) {
      const subFiles = fs.readdirSync(itemPath);
      for (const sub of subFiles) {
        const subStats = fs.statSync(path.join(itemPath, sub));
        const kb = (subStats.size / 1024).toFixed(2);
        console.log(`  ✓ dist/${(item + '/' + sub).padEnd(34)} ${kb.padStart(7)} KB`);
      }
    }
  }

  const duration = Date.now() - startTime;
  console.log('─────────────────────────────────────────────────────────────────');
  console.log(`✨ Build completed successfully in ${duration}ms!\n`);
}

build();
