import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "src/data"),
      "@components": path.resolve(__dirname, "src/components"),
      "@sections": path.resolve(__dirname, "src/components/sections"),
      "@styles": path.resolve(__dirname, "src/styles")
    }
  }
});