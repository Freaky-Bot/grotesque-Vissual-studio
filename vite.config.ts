import { defineConfig } from 'vite'

// strips type="module" from dist script tags so proxy sites dont choke on it. 
// the IIFE bundle doesnt need module mode. we adapted. we survived. mrrrow.
function stripModuleType() {
  return {
    name: 'strip-module-type',
    enforce: 'post' as const,
    transformIndexHtml(html: string) {
      return html.replace(/<script type="module" crossorigin/g, '<script');
    }
  };
}

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    open: true
  },
  plugins: [stripModuleType()],
  build: {
    target: 'ES2020',
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // IIFE format -- no type="module" needed. works in any <script> tag.
        // their website strips module attrs so we give em plain old javascript. fine. whatever. mrrrow.
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})
