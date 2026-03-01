import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['unicorn', 'vue', 'typescript', 'oxc', 'vitest', 'node', 'import', 'promise'],
})
