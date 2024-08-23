import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import mdx from "@mdx-js/rollup"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@constants": resolve(__dirname, "src/constants"),
      "@utils": resolve(__dirname, "src/utils"),
      "@designs": resolve(__dirname, "src/designs"),
      "@images": resolve(__dirname, "src/images"),
      "@pages": resolve(__dirname, "src/pages"),
      "@styles": resolve(__dirname, "src/styles"),
      "@markdown-pages": resolve(__dirname, "src/markdown-pages"),
    },
  },
})
