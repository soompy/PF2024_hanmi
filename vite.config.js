import { defineConfig } from "vite";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";
import requireTransform from "vite-plugin-require-transform";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "/components"),
      "@script": path.resolve(__dirname, "/js"),
      "@styles": path.resolve(__dirname, "/styles"),
      "@images": path.resolve(__dirname, "/assets/images"),
      "~": path.resolve(__dirname, "./"),
    },
  },
  plugins: [createHtmlPlugin(), tsconfigPaths(), requireTransform({})],
  build: {
    target: "esnext",
    outDir: "dist",
    assetsDir: "./",
  },
  server: {
    port: 3000,
  },
});
