import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Needed for Docker
    port: 5173, // Default Vite port
    watch: {
      usePolling: true // Needed for Docker on Windows/macOS
    }
  }
});
