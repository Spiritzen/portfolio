// src/pages/ComingSoon.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./ComingSoon.css";

/**
 * Page "Bientôt disponible" réutilisable.
 *
 * Props :
 *   title       {string}   — Nom du projet
 *   tag         {string}   — Ligne de technos (ex: ".NET / C# + Razor Pages")
 *   subtitle    {string}   — Phrase d'accroche
 *   description {string}   — Paragraphe de contexte
 *   stack       {string[]} — Badges technos
 *   images      {string[]} — Chemins RELATIFS à BASE_URL (ex: "images/cc-location/shot1.jpg")
 *                            Laisse vide [] pour afficher le placeholder.
 *   footerLabel {string}   — Libellé du footer
 */
export default function ComingSoon({
  title,
  tag,
  subtitle,
  description,
  stack = [],
  images = [],
  footerLabel,
}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const base = import.meta.env.BASE_URL;

  return (
    <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>
      <header className="home-hero">
        <div className="home-hero-row">
          <Link to="/" className="home-avatar-link" aria-label="Retour à l'accueil" title="Accueil">
            <img
              className="home-avatar"
              src={`${base}images/avatar.jpg`}
              alt="Retour à l'accueil"
              width="120"
              height="120"
            />
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">{title}</h1>
            <span className="home-tag">{tag}</span>
            <p className="home-subtitle">{subtitle}</p>
          </div>

          <Link className="home-cta" to="/" aria-label="Retour à l'accueil">
            Accueil
          </Link>
        </div>
      </header>

      <main className="home-main">
        {/* Bannière "Bientôt disponible" */}
        <section className="home-card home-span-2 cs-banner">
          <div className="cs-soon-icon" aria-hidden="true">⚙️</div>
          <h2 className="cs-soon-title">Page en cours de préparation</h2>
          <p className="cs-soon-text">
            La présentation détaillée de ce projet arrive bientôt : vidéo de démonstration,
            captures d'écran, stack technique et retours d'expérience.
          </p>
        </section>

        {/* Aperçu du projet */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Aperçu du projet</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>{description}</p>

          {stack.length > 0 && (
            <ul className="home-badges" style={{ marginTop: 14 }}>
              {stack.map((s) => {
                const label = typeof s === "string" ? s : s.label;
                const badge = typeof s === "string" ? "" : (s.badge ?? "");
                return <li key={label} className={badge || undefined}>{label}</li>;
              })}
            </ul>
          )}
        </section>

        {/* Galerie d'images */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Captures d'écran</h2>

          {images.length === 0 ? (
            <p className="cs-no-images">
              Les captures seront ajoutées prochainement.
            </p>
          ) : (
            <div className="cs-gallery">
              {images.map((src, i) => (
                <img
                  key={i}
                  className="cs-gallery-img"
                  src={`${base}${src}`}
                  alt={`${title} — capture ${i + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </section>

        {/* Liens */}
        <section className="home-card home-span-2 home-section-links">
          <h2 className="home-h2">Liens</h2>
          <ul className="home-contact">
            <li>
              <Link className="home-chip home-chip-accent" to={{ pathname: "/", hash: "#projets" }} replace>
                ← Retour à l'accueil
              </Link>
            </li>
            <li>
              <a className="home-chip" href="https://github.com/Spiritzen" target="_blank" rel="noreferrer">
                <img className="icon-cat" src={`${base}images/chat.svg`} alt="" aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a className="home-chip" href="https://fr.linkedin.com/in/sebastien-cantrelle-26b695106" target="_blank" rel="noreferrer">
                🔗 LinkedIn
              </a>
            </li>
            <li>
              <a className="home-chip" href="mailto:sebastien.cantrelle@hotmail.fr">
                📧 sebastien.cantrelle@hotmail.fr
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="home-footer">
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — {footerLabel ?? title}</small>
      </footer>
    </div>
  );
}
