import { defineConfig } from "vite"
import unko from "./src/unkoPlugin"

export default defineConfig({
  plugins: [unko()],
})
