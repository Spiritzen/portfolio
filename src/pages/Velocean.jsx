// src/pages/Velocean.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Velocean.css";

const DEMO_URL = "https://spiritzen.github.io/velocean/";
const GITHUB_URL = "https://github.com/Spiritzen/velocean";

export default function Velocean() {
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef(null);
  const base = import.meta.env.BASE_URL;

  useEffect(() => setLoaded(true), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>

      {/* ══ HERO compact — même famille que Vitrines locales / Creative Suite ══ */}
      <header className="home-hero">
        <div className="home-hero-row">
          <Link to="/" className="home-avatar-link" aria-label="Retour à l'accueil">
            <img
              className="vel-avatar-emblem"
              src={`${base}images/velocean/velocean-embleme.svg`}
              alt=""
              width="120"
              height="120"
            />
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">Vélocéan</h1>
            <span className="home-tag">Expérience web immersive · React · Three.js</span>
            <p className="home-subtitle">
              De la route aux abysses — une vitrine animée pour le vélo, la
              plongée, le nautisme et le permis bateau.
            </p>
          </div>

          <Link className="home-cta" to="/">← Portfolio</Link>
        </div>
      </header>

      <main className="home-main">

        {/* ══ CARTE DE DÉMONSTRATION — premier écran : vidéo + pitch + actions + preuves ══ */}
        <section className="home-card home-span-2 vel-demo-card">
          <div className="vel-demo-grid">
            {/* Colonne vidéo (~65 %) */}
            <div className="vel-demo-media">
              <div className="home-video-wrap">
                <video
                  ref={videoRef}
                  className="home-video-local"
                  src={`${base}videos/velocean.mp4`}
                  poster={`${base}images/velocean/velocean-desktop.jpg`}
                  autoPlay={!reducedMotion}
                  muted
                  playsInline
                  preload="metadata"
                  controls
                  aria-label="Vidéo de démonstration Vélocéan"
                >
                  Votre navigateur ne prend pas en charge la lecture vidéo intégrée.
                </video>
              </div>
            </div>

            {/* Colonne pitch + actions (~35 %) */}
            <div className="vel-demo-info">
              <span className="status-pill status-proto">Démonstrateur commercial non officiel</span>

              <h2 className="home-h2" style={{ marginTop: 12 }}>
                Une expérience de marque, pas une vitrine générique
              </h2>
              <p style={{ marginTop: 8, color: "#ccd0d8", lineHeight: 1.6 }}>
                Une proposition immersive conçue pour réunir vélo, plongée et
                nautisme dans un même récit visuel. Vidéo, interaction 3D et
                responsive donnent immédiatement à voir le niveau d'expérience
                proposé.
              </p>

              <div className="vel-demo-actions">
                <a
                  className="home-cta"
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐&nbsp;Voir la maquette
                </a>
                <a
                  className="home-chip home-chip-accent"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub – velocean
                </a>
              </div>

              <ul className="vel-proof-chips">
                <li>🎬&nbsp;Vidéo immersive</li>
                <li>🛞&nbsp;Roue 3D au scroll</li>
                <li>📱&nbsp;Responsive</li>
                <li>✅&nbsp;74 tests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ══ TROIS PREUVES COURTES ══ */}
        <div className="vel-proofs-grid home-span-2">
          <article className="vel-proof-card">
            <h3 className="home-h3">Expérience immersive</h3>
            <p>
              Vidéo cinétique, direction artistique océanique et narration
              commune pour le vélo, la plongée, le nautisme et le permis bateau.
            </p>
          </article>
          <article className="vel-proof-card">
            <h3 className="home-h3">Interaction 3D</h3>
            <p>
              Une roue Three.js pilotée au scroll traverse la scène avec une
              trajectoire réversible, sans empêcher la lecture lorsque WebGL
              est indisponible.
            </p>
          </article>
          <article className="vel-proof-card">
            <h3 className="home-h3">Conception robuste</h3>
            <p>
              Responsive, navigation clavier, réduction des animations et
              tests automatisés protègent l'expérience au-delà de l'effet
              visuel.
            </p>
          </article>
        </div>

        {/* ══ STACK — bande compacte ══ */}
        <div className="vel-stack-band home-span-2">
          <span className="vel-stack-label">Stack</span>
          <ul className="home-badges">
            <li className="badge-cyan">React 19</li>
            <li className="badge-cyan">TypeScript strict</li>
            <li className="badge-cyan">Vite</li>
            <li>CSS Modules</li>
            <li>Three.js</li>
            <li>React Three Fiber</li>
            <li>Vitest / Testing Library</li>
          </ul>
        </div>

        {/* ══ SOUS LE CAPOT — détails techniques repliables ══ */}
        <details className="vel-details home-card home-span-2" open>
          <summary className="vel-details-summary">Sous le capot</summary>
          <ul className="home-bullets" style={{ marginTop: 10 }}>
            <li>
              Scène 3D chargée en lazy loading (<code>React.lazy</code>/
              <code>Suspense</code>) avec détection WebGL avant montage,
              isolée par une <code>ErrorBoundary</code> dédiée.
            </li>
            <li>
              Navigation clavier complète ; menu mobile en dialogue accessible
              (fermeture à <code>Échap</code>, focus restitué).
            </li>
            <li>
              <code>prefers-reduced-motion</code> respecté : roue 3D statique
              et vidéo non lancée automatiquement.
            </li>
            <li>
              Images au format WebP, dimensions déclarées pour limiter le
              décalage de mise en page.
            </li>
            <li>
              Suite Vitest + Testing Library : 74 tests répartis sur 13
              fichiers, tous verts au moment de la rédaction du README du
              dépôt.
            </li>
          </ul>
        </details>

        {/* ══ LIENS — sans répéter les liens projet déjà présents ══ */}
        <section id="contact" className="home-card home-span-2 home-section-links">
          <h2 className="home-h2">Liens</h2>
          <ul className="home-contact">
            <li>
              <a className="home-chip" href="mailto:sebastien.cantrelle@hotmail.fr">
                📧&nbsp;sebastien.cantrelle@hotmail.fr
              </a>
            </li>
            <li>
              <a
                className="home-chip"
                href="https://fr.linkedin.com/in/sebastien-cantrelle-26b695106"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗&nbsp;LinkedIn
              </a>
            </li>
            <li>
              <a className="home-chip" href={`${base}cv.pdf`} download>
                📄&nbsp;CV (PDF)
              </a>
            </li>
            <li>
              <Link className="home-chip home-chip-accent" to="/">
                ← Retour au portfolio
              </Link>
            </li>
          </ul>
        </section>

      </main>

      <footer className="home-footer">
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — Vélocéan</small>
      </footer>
    </div>
  );
}
