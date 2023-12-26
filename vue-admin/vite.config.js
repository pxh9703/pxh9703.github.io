import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-admin/dist/',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      dts: './auto-imports.d.ts', // 生成自动导入的声明文件
      dirs: ['src/composables/**.js', 'src/composables/Api/**.js'],
      eslintrc: {
        enabled: true, // <-- this 生成eslint配置文件规则
        filepath: './.eslintrc-auto-import.json' // 生成的eslint配置文件路径
      }
    }),
    Components({
      dts: './components.d.ts', // 生成组件声明文件
      resolvers: [ElementPlusResolver()]
    }),
    createSvgIconsPlugin({
      // 配置路劲在你的src里的svg存放文件
      iconDirs: [fileURLToPath(new URL('./src/components/SvgIcon/icons', import.meta.url))],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-first',
      customDomId: 'icon-svg'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
