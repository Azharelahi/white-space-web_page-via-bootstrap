import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/white-space-web_page-via-bootstrap/',
  plugins: [react()],
})
