import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// In dev, anything under /api is forwarded to Django, so the browser sees one origin
// (no CORS setup needed). In Docker the target is http://backend:8000.
const target = process.env.VITE_PROXY_TARGET ?? "http://localhost:8000";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": { target },
    },
  },
});
