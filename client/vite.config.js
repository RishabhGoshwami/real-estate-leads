import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    imagetools(),
    react(),
    ...(mode === 'analyze'
      ? [visualizer({ open: true })]
      : [
          viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
          viteCompression({ algorithm: 'gzip', ext: '.gz' }),
        ]),
  ],
  build: {
    sourcemap: true,
    minify: mode === 'analyze' ? false : 'esbuild',
  },
  server: {
    proxy: {
      "/api": {
        target: "https://app.propertyexpertrealtors.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
}));
