import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  server: {
    host: true,
    port: 8081
},
  plugins: [vue()],
})
