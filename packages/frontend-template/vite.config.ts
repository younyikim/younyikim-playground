import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@apis', replacement: resolve(__dirname, 'src/apis') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@public', replacement: resolve(__dirname, 'public') },
      {
        find: '@icons',
        replacement: resolve(__dirname, 'public/assets/icons'),
      },
      {
        find: '@images',
        replacement: resolve(__dirname, 'public/assets/images'),
      },
    ],
  },
});
