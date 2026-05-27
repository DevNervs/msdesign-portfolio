import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "index.html",
    },
    minify: "esbuild",
    cssMinify: true,
  },
  server: {
    open: true,
  },
});
