import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'], // your custom font
        sans: ['Inter', 'sans-serif'], // optional default fallback
      },
    },
  },
  plugins: [react(), tailwindcss() ],
})
