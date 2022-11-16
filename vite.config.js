import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://alamiro.github.io/gh-react-portafolio/',
  plugins: [react()]
})
