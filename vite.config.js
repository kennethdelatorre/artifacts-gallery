import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { transformSync } from 'rolldown/experimental'

const jsxInJsPlugin = () => ({
  name: 'jsx-in-js',
  enforce: 'pre',
  transform(code, id) {
    const cleanId = id.split('?')[0]
    if (!/\.js$/.test(cleanId)) return null
    if (cleanId.includes('node_modules')) return null
    if (!/<\w/.test(code)) return null

    const isDev =
      this.environment?.config?.mode === 'development'

    const result = transformSync(cleanId, code, {
      lang: 'jsx',
      sourcemap: true,
      jsx: {
        runtime: 'automatic',
        importSource: 'react',
        development: isDev,
        refresh: false,
      },
    })
    return { code: result.code, map: result.map || null }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsxInJsPlugin()],
})