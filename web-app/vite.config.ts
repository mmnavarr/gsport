import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "node:path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "..", "shared"),
      "@ui-kit": path.resolve(__dirname, "..", "ui-kit/src"),
    },
  },
  server: {
    port: 3000, // Default port for web app
  },
  build: {
    outDir: path.resolve(__dirname, "..", "dist/web-app"),
    emptyOutDir: true,
  },
}); 