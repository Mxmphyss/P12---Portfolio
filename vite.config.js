import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";
import compression from "vite-plugin-compression";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default defineConfig({
  plugins: [react()],

  // Optimisation des images
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress",
      threshold: 10240, // Compression des fichiers > 10 KB
    }),
    viteImagemin({
      optipng: { optimizationLevel: 5 }, // Optimisation PNG
      mozjpeg: { quality: 75 }, // Compression JPEG
      svgo: {
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
      },
    }),
  ],

  // Alias pour des imports plus courts
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "src/data"),
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/components/features"),
      "@sections": path.resolve(__dirname, "src/components/sections"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@containers": path.resolve(__dirname, "src/containers"),
    },
  },

  // Configuration SCSS et minification CSS
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/base/variables" ;`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer(), // Ajoute les préfixes CSS
        cssnano({ preset: "default" }), // Minification CSS
      ],
    },
  },

  // Optimisation et minification du build
  build: {
    minify: "terser", // Minification JS avec Terser
    target: "es2015", // Compatibilité avec ES6+
    cssCodeSplit: true, // Sépare les fichiers CSS pour un meilleur cache
    terserOptions: {
      compress: {
        drop_console: true, // Supprime console.log
        drop_debugger: true, // Supprime debugger
      },
    },
  },
});
