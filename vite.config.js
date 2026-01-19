import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/devrohaan.github.io/",
  plugins: [react(), svgr()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
