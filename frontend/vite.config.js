import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
// 引入 structuredClone 的 Polyfill
import 'structured-clone'

// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [react(),svgr()],
  base: process.env.VITE_BASE_URL || '/Alpha-Tweet/', // 正確配置靜態資源的基底路徑
  publicDir: 'public', // 指定 public 資料夾
  build: {
    // rollupOptions: {
    //   external: ['axios'],
    // },
    outDir: 'dist', // 確保輸出目錄為 dist
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})