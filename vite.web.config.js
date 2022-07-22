import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'

export default defineConfig((command) => ({
  build: {
    outDir: 'public/build/web',
  },
  plugins: [
    laravel({
      config: 'web',
      input: ['resources/css/web.css', 'resources/js/web.js'],
      refresh: true,
      buildDirectory: 'build/web',
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss('tailwind.web.config.js')],
    },
  },
}))
