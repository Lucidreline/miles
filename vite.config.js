import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // this server section makes it possible to auto restart server when a file change is made in a dev container
  server: {
    host: true,
    watch: {
      usePolling: true
    }
  }
})
