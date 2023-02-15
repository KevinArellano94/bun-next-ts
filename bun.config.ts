import { defineConfig } from '@bun/core';

export default defineConfig({
  outputDir: 'dist',
  plugins: [
    {
      name: 'typescript',
    },
  ],
});
