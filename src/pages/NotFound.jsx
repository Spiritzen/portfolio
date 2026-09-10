// src/pages/NotFound.jsx
// Page 404 personnalisée — sert aussi de destination React Router pour
// toute route inconnue atteinte via le fallback dist/404.html (voir
// vite.config.mjs). Le fond sombre (.home-page/.theme-ink-marble) et le
// NeuralBackground global proviennent de l'application déjà montée :
// rien n'est dupliqué ici, et Home.css n'est volontairement pas importé
// (styles propres dans NotFound.css, tokens couleurs/typo réutilisés via
// les variables globales déjà définies dans :root).
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  // Titre d'onglet dédié le temps de l'affichage de cette page, restauré
  // proprement au démontage pour ne pas polluer une navigation suivante.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page introuvable | Sébastien Cantrelle";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <div className="home-page theme-ink-marble home-fade-in notfound-page">
      <main className="notfound-main">
        <div className="notfound-composition">
          <div className="notfound-emblem">
            <p className="notfound-glyph" aria-hidden="true">404</p>
            <img
              className="notfound-phoenix"
              src={`${base}images/avatar.jpg`}
              alt=""
              width="120"
              height="120"
            />
          </div>

          <p className="notfound-eyebrow">Erreur 404</p>
          <h1 className="notfound-title">Cette page a quitté la trajectoire</h1>
          <p className="notfound-text">
            Le lien est peut-être ancien ou incomplet. Le portfolio, lui, est
            toujours accessible.
          </p>
          <p className="notfound-signature">Le phénix retrouve toujours son chemin.</p>

          <nav className="notfound-actions" aria-label="Navigation depuis la page introuvable">
            <Link className="home-cta" to="/">
              Retour à l’accueil
            </Link>
            <Link
              className="home-cta home-cta-secondary"
              to={{ pathname: "/", hash: "#projets" }}
            >
              Découvrir mes projets
            </Link>
            <Link className="notfound-link-tertiary" to={{ pathname: "/", hash: "#contact" }}>
              Me contacter
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
