import { defineConfig } from "vite";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";
import requireTransform from "vite-plugin-require-transform";

const headerContent = fs.readFileSync(
  path.resolve(__dirname, "src/components/layouts/header.html"),
  "utf-8"
);

const footerContent = fs.readFileSync(
  path.resolve(__dirname, "src/components/layouts/footer.html"),
  "utf-8"
);

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@script": path.resolve(__dirname, "./src/js"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "~": path.resolve(__dirname, "./"),
    },
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          header: headerContent,
          footer: footerContent,
        },
      },
    }),
    tsconfigPaths(),
    requireTransform(),
  ],
  build: {
    rollupOptions: {
      external: ["bootstrap/dist/js/bootstrap.bundle.min.js"],
    },
    target: "esnext",
    outDir: "dist",
    assetsDir: "./",
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
