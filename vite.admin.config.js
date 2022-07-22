import { defineConfig } from 'vite'
import laravel, { refreshPaths } from 'laravel-vite-plugin'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  build: {
    outDir: 'public/build/admin',
  },
  plugins: [
    laravel({
      config: 'admin',
      input: ['resources/css/admin.css', 'resources/js/admin.js'],
      refresh: [...refreshPaths, 'app/Http/Livewire/**'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss('tailwind.admin.config.js')],
    },
  },
})
