import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/vite-deploy-github-pages/",
  build:{
    outDir:"docs"
  },
  plugins: [react()],
})
