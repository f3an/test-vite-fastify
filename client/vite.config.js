import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: process.env.VITE_PORT || 3001,
  },
  resolve: {
    alias: {
      '@components': '/src/app/components',
      '@helpers': '/src/app/helpers',
      '@services': '/src/app/services',
      '@routes': '/src/app/routes',
      '@hooks': '/src/app/hooks',
      '@pages': '/src/app/pages',
      '@redux': '/src/app/redux',
      '@assets': '/src/assets',
      '@app': '/src/app',
      '@': '/src',
    },
  },
})
