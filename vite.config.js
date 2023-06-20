// vite.config.js / vite.config.ts
// import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default {
  plugins: [
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "SG Curriculum Vitae",
        short_name: "SG-CV",
        description:
          "I'm passionate to connect with people through the design & programming, I believe that the perfect combination of both can create amazing things & if you are searching that, you are on the right place",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/maskable.png",
            sizes: "368x368",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
    react(),
  ],
};
