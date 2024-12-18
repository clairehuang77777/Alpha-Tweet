import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
// 引入 structuredClone 的 Polyfill
import 'structured-clone'

// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [react(),svgr()],
  server: {
    port: 3000
  }
})