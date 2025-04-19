import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mvk_portfolio/', // 👈 IMPORTANT
  plugins: [react()],
});
