import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      formats: ["cjs", "es"],
      entry: {
        button: './src/components/button.component.ts',
      },
    },
  },
});
