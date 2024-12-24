import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CryptoAbsolute-Client/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      }
    }
  }
});