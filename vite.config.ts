import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions(), vueSetupExtend()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@a': path.resolve(__dirname, 'src/assets'),
      '@c': path.resolve(__dirname, 'src/components')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/entrance.scss";'
      }
    }
  }
})
