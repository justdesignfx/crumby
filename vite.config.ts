import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import * as path from "path"
import sass from "sass"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import pluginRewriteAll from "vite-plugin-rewrite-all"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // generate manifest.json in outDir
    manifest: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `@import './src/assets/scss/_functions.scss';`,
      },
    },
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      exclude: /\.(gif)$/i, // add this line to exclude .gif files
    }),
    pluginRewriteAll(),
  ],
})
