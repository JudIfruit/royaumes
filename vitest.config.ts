import { defineConfig } from 'vitest/config'

export default defineConfig({
  // Les alias (« @/ » = dossier src/) sont lus directement dans tsconfig.json.
  resolve: { tsconfigPaths: true },
  test: {
    // Les tests s'exécutent dans Node.js, sans navigateur simulé.
    environment: 'node',
    // Seuls les fichiers de test placés dans src/ sont exécutés.
    include: ['src/**/*.test.ts'],
  },
})
