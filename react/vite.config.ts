import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Si tu repo es VazquezLucasA.github.io, usa base: '/'
  // Si tu repo es portfolio-v2, usa base: '/portfolio-v2/'
  base: '/' 
})