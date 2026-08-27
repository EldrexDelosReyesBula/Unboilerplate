import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  outDir: './dist-docs',
  site: 'https://unboilerplate.vercel.app',
});
