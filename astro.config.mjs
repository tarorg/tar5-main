// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import dotenv from 'dotenv';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // This is correct for Capacitor
  outDir: 'dist',
  build: {
    assets: 'assets'
  },
  vite: {
    ssr: {
      noExternal: ['tinybase'],
    },
    define: {
      'process.env.TURSO_DATABASE_URL': JSON.stringify(process.env.TURSO_DATABASE_URL),
      'process.env.TURSO_AUTH_TOKEN': JSON.stringify(process.env.TURSO_AUTH_TOKEN),
    },
  }
});
