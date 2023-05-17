import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    vueSetupExtend(),
    AutoImport({ imports: ['vue', 'vue-router', 'pinia'] }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@a': path.resolve(__dirname, 'src/assets'),
      '@c': path.resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/entrance.scss";',
      },
    },
  },
})
