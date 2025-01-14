import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SotUi',
      // the proper extensions will be added
      fileName: 'sot-ui',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@headlessui/vue', 'tailwind-merge'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'vue': 'Vue',
          '@headlessui/vue': 'HeadlessUIVue',
          'tailwind-merge': 'tailwindMerge',
        },
      },
    },
  },
})
