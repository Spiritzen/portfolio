import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// ✅ Secours SPA pour GitHub Pages.
// GitHub Pages est un hébergeur statique : il ne connaît pas les routes
// React (ex. /portfolio/sereno) et répond nativement par sa propre page
// 404 lors d'une ouverture directe ou d'une actualisation. En revanche,
// s'il trouve un fichier 404.html à la racine publiée, il le sert (avec
// un statut HTTP 404, mais en conservant l'URL demandée dans la barre
// d'adresse). En copiant ici notre propre dist/index.html — qui contient
// les vrais assets Vite hashés et le bon `base` — vers dist/404.html une
// fois le build terminé, ce document de secours démarre la même
// application React : React Router lit alors l'URL réelle et affiche la
// bonne page (ou la 404 personnalisée si la route n'existe vraiment
// pas). Aucune dépendance : uniquement node:fs / node:path.
function githubPagesSpaFallback() {
  let resolvedConfig;
  return {
    name: 'githubPagesSpaFallback',
    apply: 'build',
    configResolved(config) {
      resolvedConfig = config;
    },
    closeBundle() {
      const outDir = resolve(resolvedConfig.root, resolvedConfig.build.outDir);
      const indexPath = resolve(outDir, 'index.html');
      const notFoundPath = resolve(outDir, '404.html');

      if (!existsSync(indexPath)) {
        throw new Error(
          `[githubPagesSpaFallback] ${indexPath} introuvable — le build a-t-il bien produit index.html ?`
        );
      }

      copyFileSync(indexPath, notFoundPath);
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  base: '/portfolio/', // IMPORTANT pour Pages projet
})
