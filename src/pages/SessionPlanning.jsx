// src/pages/SessionPlanning.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarrouselSessionPlanning from "../components/CarrouselSessionPlanning.jsx";
import "./Home.css";

export default function SessionPlanning() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const base = import.meta.env.BASE_URL;

  return (
    <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>
      <header className="home-hero">
        <div className="home-hero-row">
          <Link
            to="/"
            className="home-avatar-link"
            aria-label="Retour à l’accueil"
            title="Accueil"
          >
            <img
              className="home-avatar"
              src={`${base}images/sessionPlanning/logo.png`}
              alt="MyDashServ — retour à l’accueil"
            />
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">MyDashServ</h1>
            <span className="home-tag">Application métier fullstack</span>

            <p className="home-subtitle">
              Application métier fullstack conçue pour répondre à des contraintes réelles de planification :
              gestion des sessions, matching intelligent des formateurs, détection automatique des conflits horaires
              et sécurisation avancée via JWT.
            </p>
          </div>

          <Link className="home-cta" to="/" aria-label="Retour à l’accueil">
            Accueil
          </Link>
        </div>
      </header>

      <main className="home-main">
        {/* Vidéo */}
        <section className="home-card home-video">
          <h2 className="home-h2">Vidéo de démonstration</h2>

          <div className="home-video-wrap">
            <iframe
              src="https://www.youtube-nocookie.com/embed/I1OuZxcyF3g?rel=0&modestbranding=1"
              title="Demo MyDashServ"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="home-video-fallback">
            <a
              href="https://www.youtube.com/watch?v=I1OuZxcyF3g"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir sur YouTube
            </a>
          </p>
        </section>

        {/* Résumé technique (quick) */}
        <section id="contexte" className="home-card home-projets">
          <h2 className="home-h2">Résumé technique</h2>

          <p>
            Étude centrée sur des <strong>règles métier complexes</strong> : gestion multi-rôles,
            affectations intelligentes et <strong>détection automatique des collisions horaires</strong>.
            Backend sécurisé via <strong>Spring Security + JWT</strong> et API REST protégée (contrôles côté serveur).
          </p>

          <ul className="home-badges">
            <li className="badge-blue">React</li>
            <li className="badge-blue">Vite</li>
            <li className="badge-blue">Spring Boot</li>
            <li className="badge-blue">REST • JWT</li>
            <li>SQL</li>
            <li>Architecture en couches</li>
          </ul>
        </section>

        {/* Ce que j’ai livré */}
        <section className="home-card home-span-2" id="livrables">
          <h2 className="home-h2">Ce que j’ai livré</h2>

          <ul className="home-bullets">
            <li>
              <b>API REST sécurisée</b> (Spring Security + JWT) avec routes publiques / protégées
            </li>
            <li>
              <b>Workflow de statuts</b> de session + règles de verrouillage côté backend
            </li>
            <li>
              <b>Moteur de matching</b> formateur : compétences, disponibilités, congés, conflits horaires
            </li>
            <li>
              <b>Détection de collisions</b> (contrôles serveur, cohérence planning)
            </li>
            <li>
              <b>Front React</b> : vues admin/gestion, filtres, modales, UX cohérente
            </li>
            <li>
              <b>Base SQL</b> : MCD + dictionnaire de données + base MariaDB (HeidiSQL)
            </li>
          </ul>
        </section>

        {/* Stack & responsabilités */}
        <section className="home-card home-span-2" id="stack">
          <h2 className="home-h2">Stack &amp; responsabilités</h2>

          <ul className="home-bullets">
            <li>
              <b>Frontend :</b> React + Vite, composants, modales, intégration API
            </li>
            <li>
              <b>Backend :</b> Spring Boot, services métier, repositories JPA, DTO/projections
            </li>
            <li>
              <b>Sécurité :</b> login, JWT, filtre, routes protégées, gestion des rôles
            </li>
            <li>
              <b>Données :</b> SQL, contraintes, intégrité référentielle (MCD → dictionnaire → BDD)
            </li>
            <li>
              <b>Qualité :</b> règles métier appliquées côté serveur (pas seulement côté UI)
            </li>
          </ul>
        </section>

        {/* Carrousel pleine largeur (modale intégrée) */}
        <CarrouselSessionPlanning />

        {/* Résultat concret */}
        <section className="home-card home-span-2" id="resultats">
          <h2 className="home-h2">Résultat concret</h2>

          <p>
            MyDashServ empêche les <b>doubles affectations</b>, prend en compte <b>disponibilités</b> et <b>congés</b>,
            détecte les <b>conflits de créneaux</b> et sécurise les actions sensibles selon le rôle.
            Les contrôles sont appliqués <b>côté API</b> afin de garantir l’intégrité du planning,
            même si le frontend est contourné.
          </p>
        </section>

        {/* Endpoints clés */}
        <section className="home-card home-span-2" id="endpoints">
          <h2 className="home-h2">Endpoints clés (extraits)</h2>

          <pre className="home-code">
POST /api/auth/login  → récupère un JWT{"\n"}
GET  /api/auth/me     → profil (protégé){"\n"}
GET  /api/sessions    → liste + filtres{"\n"}
POST /api/sessions    → création (admin/gestion){"\n"}
GET  /api/affectations/matching?sessionId=...{"\n"}
POST /api/affectations → proposer / affecter (protégé)
          </pre>

          <p style={{ marginTop: 8 }}>
            Authentification stateless via JWT, contrôle des rôles et validations métier côté serveur.
          </p>
        </section>

        {/* Problème → Solution → Apport (contexte détaillé) */}
        <section id="objectifs" className="home-card home-span-2">
          <h2 className="home-h2">Problème → Solution → Apport</h2>

          <p style={{ marginTop: 6 }}>
            <b>MyDashServ</b> modélise et résout des problématiques concrètes de planification :
            sessions multiples, intervenants avec contraintes, et risques de chevauchement.
            L’application intègre la gestion des sessions, l’affectation optimisée des formateurs,
            la prise en compte des disponibilités et congés, et la prévention des conflits horaires,
            dans une architecture fullstack sécurisée et évolutive.
          </p>

          <h3 className="home-h3" style={{ marginTop: 16 }}>
            Règles métier clés
          </h3>
          <ul className="home-bullets">
            <li>Un formateur ne peut pas être affecté à deux sessions simultanément</li>
            <li>Prise en compte des disponibilités et congés</li>
            <li>Statuts verrouillés selon le cycle de vie</li>
            <li>Contrôle serveur via règles implémentées en Service</li>
          </ul>

          <h3 className="home-h3" style={{ marginTop: 16 }}>
            Gestion des collisions (cœur technique)
          </h3>
          <p>Détection basée sur la règle suivante :</p>

          <pre className="home-code">
A.date_debut &lt; B.date_fin{"\n"}
ET{"\n"}
A.date_fin &gt; B.date_debut
          </pre>

          <p>
            Cette logique est exécutée côté backend via Repository Spring Boot,
            garantissant cohérence métier et performance.
          </p>

          <h3 className="home-h3" style={{ marginTop: 16 }}>
            Architecture technique
          </h3>
          <p>
            Backend structuré en couches : Controllers, Services (règles métier), Repositories JPA,
            DTOs/projections. Sécurisation stateless via JWT (filtre personnalisé).
            Frontend React consommant une API REST protégée.
          </p>
        </section>

        {/* CTA recrutement */}
        <section className="home-card home-span-2" id="cta">
          <h2 className="home-h2">Ce que je recherche</h2>
          <p>
            Je recherche un poste <b>développeur fullstack / backend Java</b> (junior),
            où je peux apporter : conception d’API robustes, règles métier, sécurité JWT
            et intégration front React. Je suis également motivé pour monter en compétence
            sur Docker, CI/CD et pratiques DevOps en contexte d’équipe.
          </p>
        </section>

        {/* Liens */}
        <section className="home-card home-span-2 home-section-links">
          <h2 className="home-h2">Liens</h2>
          <ul className="home-contact">
            <li>
              <Link className="home-chip home-chip-accent" to={{ pathname: "/", hash: "#top" }} replace>
                ← Retour à l’accueil
              </Link>
            </li>

            <li>
              <a
                className="home-chip"
                href="https://github.com/Spiritzen/MyDashServ"
                target="_blank"
                rel="noreferrer"
              >
                <img className="icon-cat" src={`${base}images/chat.svg`} alt="" aria-hidden="true" />
                GitHub – MyDashServ
              </a>
            </li>

            <li>
              <a
                className="home-chip"
                href="https://www.youtube.com/watch?v=DVOQzauF8Es"
                target="_blank"
                rel="noreferrer"
              >
                🎬 Portfolio vidéo
              </a>
            </li>

            <li>
              <a
                className="home-chip"
                href="https://fr.linkedin.com/in/sebastien-cantrelle-26b695106"
                target="_blank"
                rel="noreferrer"
              >
                🔗 LinkedIn
              </a>
            </li>

            <li>
              <a className="home-chip" href="mailto:sebastien.cantrelle@hotmail.fr">
                📧 sebastien.cantrelle@hotmail.fr
              </a>
            </li>

            <li>
              <a className="home-chip" href="tel:+33629464593" aria-label="Appeler 06 29 46 45 93">
                📞 06&nbsp;29&nbsp;46&nbsp;45&nbsp;93
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="home-footer">
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — MyDashServ</small>
      </footer>
    </div>
  );
}