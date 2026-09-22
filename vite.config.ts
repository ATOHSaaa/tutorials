import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: https://atohsaaa.github.io/tutorials/
const base = process.env.GITHUB_PAGES === 'true' ? '/tutorials/' : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
