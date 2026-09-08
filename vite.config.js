import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(process.env.PORT || env.PORT || 3010);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535');
  }
  return {
    plugins: [
      tailwindcss(),
      react()
    ],
    server: {
      port,
      open: true
    },
    preview: { port },
    // Tailwind is handled by the Vite plugin; ignore parent PostCSS configs.
    css: { postcss: { plugins: [] } },
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'wouter'],
            icons: ['lucide-react'],
            confetti: ['canvas-confetti']
          }
        }
      }
    }
  };
});
