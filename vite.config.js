import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/random-quote-app/", // ensure this is just '/' for Netlify
});
