import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import wyw from "@wyw-in-js/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Alan-Graton.github.io/portifolio-v3',
  plugins: [react(), wyw()],
});
