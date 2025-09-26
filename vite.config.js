import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/spa-fronted/'   // Must match your repo name on GitHub
});
