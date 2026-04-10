import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves this project from /sorrything/
  base: command === 'build' ? '/sorrything/' : '/',
}))
