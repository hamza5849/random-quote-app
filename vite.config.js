import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/random-quote-app/", // 👈 this MUST match your repo name
})
