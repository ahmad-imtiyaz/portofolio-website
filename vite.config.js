// Vite configuration for React app
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub PAT — optional. If present, proxy forwards Authorization header
// to raise rate limit from 60/hr to 5000/hr. NEVER commit a real token.
const GH_TOKEN = process.env.VITE_GH_TOKEN || "";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/gh": {
        target: "https://api.github.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/gh/, ""),
        headers: {
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(GH_TOKEN ? { "Authorization": `Bearer ${GH_TOKEN}` } : {}),
        },
      },
    },
  },
});
