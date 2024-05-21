import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
//   "@vitejs/plugin-react": "^4.2.1",
// "@vitejs/plugin-react-swc": "^3.5.0",
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
