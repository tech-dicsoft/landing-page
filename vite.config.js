import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages: set VITE_BASE_PATH=landing-page khi build để asset load đúng
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ? `/${process.env.VITE_BASE_PATH}/` : '/',
})
