import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use repo subpath only on GitHub Actions (Pages). Other hosts like Vercel use root.
  base:
    command === 'build' && process.env.GITHUB_ACTIONS === 'true'
      ? '/sorrything/'
      : '/',
}))
