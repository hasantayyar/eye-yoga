import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/** GitHub Pages serves unknown paths via 404.html; reuse the SPA shell. */
function spaFallback(): Plugin {
  return {
    name: 'spa-github-pages',
    closeBundle() {
      const dist = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/eye-yoga/',
  plugins: [react(), spaFallback()],
  server: {
    host: true,
  },
  preview: {
    host: true,
  },
})
