// src/pages/TrajetFormateur.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./TrajetFormateur.css";

export default function TrajetFormateur() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const base = import.meta.env.BASE_URL;

  return (
    <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>

      {/* ══ HERO compact — nouvel emblème ══ */}
      <header className="home-hero">
        <div className="home-hero-row">
          <Link to="/" className="home-avatar-link" aria-label="Retour à l'accueil">
            <img
              className="tf-avatar-emblem"
              src={`${base}images/trajet-formateur/trajet-formateur-embleme.svg`}
              alt=""
              width="120"
              height="120"
            />
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">Trajet Formateur</h1>
            <span className="home-tag">Application métier fullstack — mobilité des formateurs</span>
            <p className="home-subtitle">
              Gestion des affectations de formateurs vers des écoles
              partenaires, avec validation serveur de la faisabilité du trajet.
            </p>
          </div>

          <Link className="home-cta" to="/">← Portfolio</Link>
        </div>
      </header>

      <main className="home-main">

        {/* ══ APERÇU — capture puis GitHub immédiatement dessous ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Aperçu</h2>
          <img
            className="tf-preview-img"
            src={`${base}images/trajet-formateur/preview.jpg`}
            alt="Trajet Formateur — modale d'affectation d'un formateur, avec distances et commentaires par candidat"
            width="1280"
            height="637"
            loading="lazy"
          />
          <a
            className="home-chip home-chip-accent tf-github-cta"
            href="https://github.com/Spiritzen/trajet-formateur"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub – trajet-formateur
          </a>
          <p className="home-note tf-preview-caption" style={{ opacity: 0.75, fontSize: "0.85rem" }}>
            Capture réelle de l'application, fournie par le dépôt du projet.
          </p>
        </section>

        {/* ══ STATUT HONNÊTE ══ */}
        <section className="home-card home-span-2">
          <span className="status-pill status-proto tf-status-pill">
            🧭 Prototype fonctionnel — architecture préparée pour une future intégration cartographique
          </span>
          <p style={{ marginTop: 10, color: "#ccd0d8" }}>
            Le dépôt public documente l'application fullstack et sa règle de
            faisabilité. L'intégration d'un service GPS réel reste une
            évolution prévue, pas une fonctionnalité actuellement revendiquée.
          </p>
        </section>

        {/* ══ LE PROBLÈME MÉTIER + distinction MyDashServ ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Le problème métier</h2>
          <div className="tf-problem-grid">
            <p style={{ color: "#ccd0d8", lineHeight: 1.7 }}>
              Dans un organisme de formation, affecter un formateur ne dépend
              pas seulement de ses compétences et de sa disponibilité. La
              distance et le temps nécessaire pour rejoindre l'école suivante
              peuvent rendre une mission irréalisable. Trajet Formateur
              transforme cette contrainte logistique en décision explicite,
              contrôlée côté serveur.
            </p>
            <aside className="tf-problem-aside">
              <h3 className="home-h3">Un projet distinct de MyDashServ</h3>
              <p>
                <Link to="/session-planning">MyDashServ</Link> traite la
                planification et les conflits horaires. Trajet Formateur se
                concentre sur la mobilité : durée du déplacement, marge
                disponible et faisabilité de l'affectation.
              </p>
            </aside>
          </div>
        </section>

        {/* ══ LA DÉCISION CÔTÉ SERVEUR — parcours en 3 étapes ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">La décision côté serveur</h2>
          <div className="tf-decision-flow">
            <div className="tf-decision-step">
              <span className="tf-decision-num" aria-hidden="true">1</span>
              <h3 className="home-h3">Durée estimée</h3>
              <p>Le système évalue le temps nécessaire pour rejoindre l'école.</p>
            </div>
            <span className="tf-decision-arrow" aria-hidden="true">→</span>
            <div className="tf-decision-step">
              <span className="tf-decision-num" aria-hidden="true">2</span>
              <h3 className="home-h3">Marge disponible</h3>
              <p>Cette durée est comparée au temps restant avant le début de la session.</p>
            </div>
            <span className="tf-decision-arrow" aria-hidden="true">→</span>
            <div className="tf-decision-step">
              <span className="tf-decision-num" aria-hidden="true">3</span>
              <h3 className="home-h3">Décision serveur</h3>
              <p>L'affectation est autorisée ou refusée par la logique métier, pas seulement par l'interface.</p>
            </div>
          </div>
          <span className="status-pill status-dev" style={{ marginTop: 16 }}>
            ✅ Validation côté serveur
          </span>
        </section>

        {/* ══ TROIS CARTES TECHNIQUES COMPACTES ══ */}
        <div className="tf-cards-grid home-span-2">
          <article className="tf-tech-card">
            <h3 className="home-h3">Modèle métier</h3>
            <ul className="home-bullets">
              <li>Formateur</li>
              <li>École</li>
              <li>Session</li>
              <li>Trajet — distance, durée, statut, compatibilité</li>
            </ul>
          </article>
          <article className="tf-tech-card">
            <h3 className="home-h3">Architecture sécurisée</h3>
            <ul className="home-bullets">
              <li>Controller → Service → Repository → PostgreSQL</li>
              <li>Logique métier dans la couche service</li>
              <li>DTO entre API et modèle</li>
              <li>JWT, routes protégées et rôles</li>
            </ul>
          </article>
          <article className="tf-tech-card">
            <h3 className="home-h3">Évolution cartographique</h3>
            <ul className="home-bullets">
              <li>Architecture préparée pour un futur fournisseur d'itinéraires</li>
              <li>OpenRouteService, Mapbox ou Google Maps — pistes à l'étude</li>
              <li>Aucune de ces API n'est intégrée à ce jour</li>
              <li>Gestion future des clés, erreurs et dépendances externes</li>
            </ul>
          </article>
        </div>

        {/* ══ STACK TECHNIQUE — compacte ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Stack technique</h2>
          <div className="tf-stack-grid">
            <div>
              <span className="tf-stack-label">Frontend</span>
              <ul className="home-badges">
                <li className="badge-orange">React 19</li>
                <li>Vite 7</li>
                <li>Axios</li>
              </ul>
            </div>
            <div>
              <span className="tf-stack-label">Backend</span>
              <ul className="home-badges">
                <li className="badge-orange">Java 21</li>
                <li>Spring Boot 3.5</li>
                <li>Spring Security</li>
                <li>JWT</li>
                <li>JPA</li>
              </ul>
            </div>
            <div>
              <span className="tf-stack-label">Données</span>
              <ul className="home-badges">
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <span className="tf-stack-label">Infrastructure</span>
              <ul className="home-badges">
                <li>Docker</li>
                <li>Docker Compose</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ══ LIENS — sans répéter le GitHub du projet ══ */}
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
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — Trajet Formateur</small>
      </footer>
    </div>
  );
}
