import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import fs from "fs";

// Get all icon groups
const iconGroups = fs
  .readdirSync(resolve(__dirname, "src/icons"))
  .filter((dir) => {
    const fullPath = resolve(__dirname, "src/icons", dir);
    return fs.statSync(fullPath).isDirectory() && dir !== "utils";
  });

// Create entry points for each icon and group
const entries = {
  index: resolve(__dirname, "build/index.ts"),
  ...Object.fromEntries(
    iconGroups.map((group) => [
      `${group}/index`,
      resolve(__dirname, `build/${group}/index.ts`),
    ])
  ),
};

const config = defineConfig({
  plugins: [vue()],
  build: {
    target: "modules",
    lib: {
      entry: entries,
      name: "VueIconsLib",
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        format: "es",
        globals: {
          vue: "Vue",
        },
        preserveModules: false,
        manualChunks: (id) => {
          if (id.includes("/icons/")) {
            const group = iconGroups.find((g) => id.includes(`/icons/${g}/`));
            if (group) return `vue-icons-${group}`;
          }
          return "vendor";
        },
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "[name].js",
      },
      cache: true,
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
});
export default config;
