import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    // Use relative base path for maximum portability (Netlify Drop, GitHub Pages, etc.)
    base: './',
    // Define process.env.API_KEY globally for the app to use, defaulting to empty string if missing
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || '')
    }
  };
});