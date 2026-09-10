import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const basePath = '/react-dark-light-toggle/'

function rewriteImagePaths() {
  return {
    name: 'rewrite-image-paths',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === 'chunk' && file.code) {
          file.code = file.code
            .replace(/(["'`])\/images\//g, `$1${basePath}images/`)
            .replace(/(["'`])images\//g, `$1${basePath}images/`)
        }
      }
    },
  }
}

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), rewriteImagePaths()],
})
