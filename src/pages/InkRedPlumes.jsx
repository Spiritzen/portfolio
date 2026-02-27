// src/pages/InkRedPlumes.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarrouselIRP from "../components/CarrouselIRP.jsx";
import "./Home.css";

export default function InkRedPlumes() {
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
              src={`${base}images/inkredplumes/logo.jpg`}
              alt="Ink Red Plumes — retour à l’accueil"
            />
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">Ink Red Plumes</h1>
            <span className="home-tag">Application e-commerce fullstack</span>

            <p className="home-subtitle">
              Marketplace de livres conçue comme une SPA moderne : authentification JWT, rôles (buyer/seller),
              CRUD sécurisé, recherche + filtres, et UX fluide via modales — front React, back Spring Boot.
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
              src="https://www.youtube-nocookie.com/embed/0VqsB_-Sshw?rel=0&modestbranding=1"
              title="Demo Ink Red Plumes"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="home-video-fallback">
            <a
              href="https://www.youtube.com/watch?v=0VqsB_-Sshw"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir sur YouTube
            </a>
          </p>
        </section>

        {/* Résumé technique */}
        <section id="contexte" className="home-card home-projets">
          <h2 className="home-h2">Résumé technique</h2>

          <p>
            Application e-commerce fullstack construite autour d’un besoin réel : publier et vendre des livres
            avec des rôles distincts, une API sécurisée et une UX fluide. Le frontend React (SPA) consomme une
            API Spring Boot (REST) protégée via <strong>JWT</strong>, avec une base <strong>MariaDB/MySQL</strong>.
          </p>

          <ul className="home-badges">
            <li>React</li>
            <li>Vite</li>
            <li>Spring Boot</li>
            <li>REST • JWT</li>
            <li>MariaDB/MySQL</li>
            <li>Docker (dev)</li>
          </ul>
        </section>

        {/* Ce que j’ai livré */}
        <section className="home-card home-span-2" id="livrables">
          <h2 className="home-h2">Ce que j’ai livré</h2>

          <ul className="home-bullets">
            <li>
              <b>Authentification JWT</b> + gestion des rôles (buyer/seller/admin) et routes protégées
            </li>
            <li>
              <b>CRUD complet</b> livres &amp; catégories (création/édition/suppression, validations)
            </li>
            <li>
              <b>UX SPA</b> : parcours sans rechargement, modales “Créer / Modifier / Détails”
            </li>
            <li>
              <b>Recherche + filtres</b> (texte/catégorie) + pagination côté API pour rester performant
            </li>
            <li>
              <b>Gestion des images</b> de couverture + affichage optimisé (miniatures, modale détail)
            </li>
            <li>
              <b>Base SQL</b> structurée (relations, intégrité, scripts d’init)
            </li>
          </ul>
        </section>

        {/* Stack & responsabilités */}
        <section className="home-card home-span-2" id="stack">
          <h2 className="home-h2">Stack &amp; responsabilités</h2>

          <ul className="home-bullets">
            <li>
              <b>Frontend :</b> React + Vite, composants, modales, routing, responsive, intégration API
            </li>
            <li>
              <b>Backend :</b> Spring Boot, architecture en couches, services métier, repositories, DTOs
            </li>
            <li>
              <b>Sécurité :</b> Spring Security, JWT, contrôle d’accès par rôle + endpoints protégés
            </li>
            <li>
              <b>Données :</b> MariaDB/MySQL, tables + relations, cohérence + scripts de données
            </li>
            <li>
              <b>Qualité :</b> validations, erreurs gérées, logique métier côté serveur (back fait autorité)
            </li>
          </ul>
        </section>

        {/* Carrousel */}
        <CarrouselIRP />

        {/* Résultat concret */}
        <section className="home-card home-span-2" id="resultats">
          <h2 className="home-h2">Résultat concret</h2>

          <p>
            Ink Red Plumes propose un parcours complet : <b>connexion → navigation → recherche → détail → actions</b> selon le rôle.
            Un vendeur publie/édite/supprime ses livres, un acheteur consulte et interagit avec le catalogue.
            Les contrôles sont appliqués <b>côté API</b> (JWT + rôles + validations) afin de garantir la cohérence,
            même si le frontend est contourné.
          </p>
        </section>

        {/* Endpoints clés */}
        <section className="home-card home-span-2" id="endpoints">
          <h2 className="home-h2">Endpoints clés (extraits)</h2>

     <pre className="home-code">
POST /api/auth/login           → récupère un JWT{"\n"}
GET  /api/auth/me              → profil (protégé){"\n"}
GET  /api/livres               → liste (public / filtrable selon config){"\n"}
POST /api/livres               → créer (seller/admin){"\n"}
PUT  /api/livres/{"{id}"}      → modifier (owner/seller/admin){"\n"}
DELETE /api/livres/{"{id}"}    → supprimer (owner/seller/admin)
</pre>

          <p style={{ marginTop: 8 }}>
            Authentification stateless via JWT, autorisations par rôle, et validations côté serveur.
          </p>
        </section>

        {/* Problème → Solution → Apport */}
        <section id="objectifs" className="home-card home-span-2">
          <h2 className="home-h2">Problème → Solution → Apport</h2>

          <p style={{ marginTop: 6 }}>
            <b>Ink Red Plumes</b> répond à un besoin e-commerce classique mais exigeant : gérer un catalogue,
            des rôles distincts, des opérations CRUD sécurisées et une UX rapide. La solution s’appuie sur une
            SPA React (modales et navigation fluide) et une API Spring Boot sécurisée (JWT, rôles, validations),
            avec une base relationnelle MariaDB/MySQL garantissant l’intégrité des données.
          </p>

          <div className="home-group">
            <h3 className="home-h3">Objectifs (SMART)</h3>
            <ul className="irp-list">
              <li>
                <strong>O1.</strong> Authentification <strong>JWT</strong> + rôles <strong>buyer/seller</strong>, CRUD livres &amp; catégories.
              </li>
              <li>
                <strong>O2.</strong> UX SPA sans rechargement : création/édition en <strong>modales</strong>, responsive.
              </li>
              <li>
                <strong>O3.</strong> Recherche + filtres multi-critères avec pagination côté API.
              </li>
              <li>
                <strong>O4.</strong> Robustesse : validations, erreurs gérées, logs (base propre pour itérations).
              </li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">KPIs (cibles)</h3>
            <ul className="irp-kpis">
              <li>Couverture endpoints prioritaires&nbsp;: <strong>CRUD complet</strong></li>
              <li>Perf front (mobile)&nbsp;: <strong>Lighthouse ≥ 90</strong></li>
              <li>API P95 (cible)&nbsp;: <strong>&lt; 300 ms</strong></li>
              <li>Bugs majeurs en démo&nbsp;: <strong>0</strong></li>
            </ul>

            <p className="home-note" style={{ opacity: 0.85, marginTop: 8 }}>
              Mesure P95 (local) :{" "}
              <code>npx autocannon -d 20 -c 20 http://localhost:8080/api/books</code>
            </p>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Périmètre</h3>
            <ul className="irp-grid">
              <li>Front : React (Vite), routing, modales, UI responsive.</li>
              <li>Back : Spring Boot, REST, JWT, validations.</li>
              <li>Données : MariaDB/MySQL (dev) + scripts init.</li>
              <li>Qualité : conventions, logs.</li>
            </ul>

            <h3 className="home-h3" style={{ marginTop: 10 }}>
              Hors périmètre (itérations futures)
            </h3>
            <ul className="irp-list">
              <li>Déploiement hébergé (LWS) + nom de domaine.</li>
              <li>Notifications temps réel.</li>
              <li>Back-office avancé.</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Contraintes &amp; risques</h3>
            <ul className="irp-list">
              <li>Planning serré (arbitrage features vs. qualité).</li>
              <li>Pas de BDD managée en ligne (à ce stade).</li>
              <li>Gestion des images et cohérence front/back.</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Stratégie de démo</h3>
            <ul className="irp-list">
              <li>Parcours A→Z : recherche → détail → actions selon rôle.</li>
              <li>Zoom technique : JWT, endpoints, modèle SQL.</li>
              <li>Mesures : Lighthouse (front) + bench local (API).</li>
            </ul>
          </div>
        </section>

        {/* CTA recrutement */}
        <section className="home-card home-span-2" id="cta">
          <h2 className="home-h2">Ce que je recherche</h2>
          <p>
            Je recherche un poste <b>développeur fullstack / backend Java</b> (junior),
            où je peux apporter : API robustes, sécurité JWT, logique métier, intégration React.
            Motivé pour monter en puissance sur Docker, CI/CD et pratiques DevOps en équipe.
          </p>
        </section>

        {/* Liens */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Liens</h2>

          <ul className="home-contact">
            <li>
              <Link className="home-chip" to={{ pathname: "/", hash: "#top" }} replace>
                ← Retour à l’accueil
              </Link>
            </li>

            {/* Repo spécifique à ajouter plus tard */}
            <li>
              <a
                className="home-chip"
                href="https://github.com/Spiritzen"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
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
              <a
                className="home-chip"
                href="tel:+33629464593"
                aria-label="Appeler 06 29 46 45 93"
              >
                📞 06&nbsp;29&nbsp;46&nbsp;45&nbsp;93
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="home-footer">
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — Ink Red Plumes</small>
      </footer>
    </div>
  );
}