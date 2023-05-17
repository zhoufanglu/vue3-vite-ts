import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { ConfigEnv } from 'vite'
import * as path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量
  return defineConfig({
    base: './',
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
    server: {
      host: '0.0.0.0',
    },
    build: {
      sourcemap: false,
      outDir: env.VITE_OUTPUT_DIR,
      assetsDir: 'assets',
    },
  })
}
