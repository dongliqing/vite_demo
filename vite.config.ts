import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import AutoImport  from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      //解决eslint报错的问题
      eslintrc: {
        enabled: true
      },
      dts: "./auto-imports.d.ts"
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        }),
      ],
      directoryAsNamespace: true
    })
  ],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src"),
      "@@": path.resolve(__dirname),
    }
  },
  build:{
    sourcemap: true,
    minify: "terser",
    rollupOptions:{
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      }
    },
    chunkSizeWarningLimit: 1000,
    terserOptions:{
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      output:{
        comments: true,
      }
    }
  },
  server: {
    hmr: true,
    open: true,
    port: 8080,
    host: true,
    proxy:{
      "api": {
        // target: "http://",
        changeOrigin: true,
        secure: false,
        // rewrite: path => path.replace(/^\/api/,""),
      }
    }
  }
})
