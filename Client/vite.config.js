import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import http from 'https'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
