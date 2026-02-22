import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: o nome do repositório no GitHub Pages
  // Se o teu repo se chama "Texdex", mantém '/Texdex/'
  // Se mudaste o nome do repo, altera aqui
  base: '/Texdex/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
