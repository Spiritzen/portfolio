// src/pages/Home.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => setLoaded(true), []);

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);

  // ✅ Base publique (dépend de vite.config.js → base: '/portfolio/')
  const base = import.meta.env.BASE_URL;

  // ✅ Défilement doux réutilisable vers une ancre de la page (Contact,
  // Projets…), avec mise à jour de l'URL — remplace l'ancien goToContact
  // dédié pour servir aussi le nouveau CTA "Découvrir mes projets".
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) history.replaceState(null, "", `#${id}`);
  };

  return (
    <div
      id="top"
      className={`home-page theme-ink-marble home-index-page ${loaded ? "home-fade-in" : ""}`}
    >
      <header className="home-hero">
        <div className="home-hero-row">
          <img
            className="home-avatar"
            src={`${base}images/avatar.jpg`}
            alt="Sébastien Cantrelle"
            width="120"
            height="120"
          />

          <div className="home-hero-info">
            <h1 className="home-title">
              Sébastien Cantrelle
              <span className="home-open-to-work">
                <span className="home-otw-dot" aria-hidden="true"></span>
                Disponible
              </span>
            </h1>
            <p className="home-subtitle">
              Développeur Full Stack — applications métier &amp; SaaS
            </p>
            <span className="home-tag">Java / Spring Boot · Ruby on Rails · React</span>
          </div>

          <div className="home-hero-ctas">
            <a className="home-cta" href="#projets" onClick={scrollToId("projets")}>
              Découvrir mes projets
            </a>
            <a
              className="home-cta home-cta-secondary"
              href="#contact"
              onClick={scrollToId("contact")}
            >
              Me contacter
            </a>
          </div>
        </div>
      </header>

      <main className="home-main">
        <section id="projets" className="home-card home-projets">
          <h2 className="home-h2">Projets récents</h2>

          {/* ✅ Preuves visuelles principales — Sereno et AgencyOS, seuls
              projets illustrés par une capture d'écran existante. Les 6
              autres projets restent au format compact ci-dessous : c'est
              ce contraste qui établit la hiérarchie. */}
          <div className="home-projects-featured">
            <Link
              className="home-project-feature home-project-feature-sereno"
              to="/sereno"
              aria-label="Voir le projet Sereno — SaaS de facturation électronique"
            >
              <img
                className="home-project-feature-img"
                src={`${base}images/sereno/sereno-01-dashboard.jpg`}
                alt="Tableau de bord Sereno : encaissement constaté, montants en attente et en retard, taux de complétude documentaire et échéances à venir."
                width="1920"
                height="954"
                loading="eager"
              />
              <div className="home-project-feature-body">
                <div className="home-project-feature-head">
                  <h3 className="home-project-feature-title">Sereno</h3>
                  <span className="status-pill status-dev">
                    🛠️ Développement avancé
                  </span>
                </div>
                <p className="home-project-feature-desc">
                  SaaS de facturation électronique conforme Factur-X, Ruby on Rails + React.
                </p>
                <span className="home-tile-tech badge-teal">Rails · React · Factur-X</span>
                <span className="home-project-feature-link">Voir le projet Sereno →</span>
              </div>
            </Link>

            <Link
              className="home-project-feature home-project-feature-agency"
              to="/agencyos"
              aria-label="Voir le projet AgencyOS — SaaS multi-tenant de gestion d'agence"
            >
              <img
                className="home-project-feature-img"
                src={`${base}images/agencyOS/agencyOS1.jpg`}
                alt="Tableau de bord AgencyOS : chiffre d'affaires du mois, projets actifs, tâches ouvertes et factures impayées."
                width="1920"
                height="955"
                loading="lazy"
              />
              <div className="home-project-feature-body">
                <div className="home-project-feature-head">
                  <h3 className="home-project-feature-title">
                    AgencyOS <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>V2</span>
                  </h3>
                  <span className="status-pill status-offline">
                    Démo temporairement hors ligne
                  </span>
                </div>
                <p className="home-project-feature-desc">
                  SaaS multi-tenant de gestion d'agence, Java / Spring Boot + React.
                </p>
                <span className="home-tile-tech badge-agency">Java 21 · Spring Boot · React</span>
                <span className="home-project-feature-link">Voir le projet AgencyOS →</span>
              </div>
            </Link>
          </div>

          {/* ✅ Autres projets — même ordre qu'avant, format compact */}
          <ul className="home-grid home-grid-secondary">
            <li className="home-tile home-tile-irp">
              <Link className="home-link-tile" to="/ink-red-plumes">
                <span>Ink Red Plumes</span>
                <span className="home-tile-tech badge-blue">Java · Spring Boot · React</span>
              </Link>
            </li>

            <li className="home-tile home-tile-mydash">
              <Link className="home-link-tile" to="/session-planning">
                <span>MyDashServ</span>
                <span className="home-tile-tech badge-blue">Java · Spring Boot · React</span>
              </Link>
            </li>

            <li className="home-tile home-tile-trajet">
              <Link className="home-link-tile" to="/trajet-formateur">
                <span>Trajet Formateur</span>
                <span className="home-tile-tech badge-orange">Java · Spring Boot · PostgreSQL</span>
              </Link>
            </li>

            <li className="home-tile home-tile-velocean">
              <Link className="home-link-tile" to="/velocean">
                <span>Vélocéan</span>
                <span className="home-tile-tech badge-cyan">React · TypeScript · Three.js</span>
              </Link>
            </li>

            <li className="home-tile home-tile-featured">
              <Link className="home-link-tile" to="/creative-suite">
                <span>✦ Creative Suite</span>
                <span className="home-tile-tech badge-rainbow">React · TypeScript · Web APIs</span>
              </Link>
            </li>

            <li className="home-tile home-tile-vitrines">
              <Link className="home-link-tile" to="/vitrines-locales">
                <span>Vitrines locales</span>
                <span className="home-tile-tech badge-pink">Astro · React · TypeScript</span>
              </Link>
            </li>
          </ul>
        </section>

        {/* ✅ Zone de conversion sobre, après les preuves — pas de doublon
            avec la section Contact complète plus bas. */}
        <section className="home-card home-conversion">
          <div className="home-conversion-row">
            <p className="home-conversion-text">
              Un besoin métier ou SaaS à cadrer&nbsp;? Discutons-en.
            </p>
            <div className="home-conversion-ctas">
              <a className="home-cta" href="#contact" onClick={scrollToId("contact")}>
                Me contacter
              </a>
              <a className="home-cta home-cta-secondary" href={`${base}cv.pdf`} download>
                Télécharger mon CV
              </a>
            </div>
          </div>
        </section>

        {/* ✅ Bloc "Ce que je cherche" — positionnement à jour (sprint accueil R2) */}
        <section id="recherche" className="home-card home-span-2">
          <h2 className="home-h2">Ce que je cherche</h2>

          <p style={{ marginTop: 8, color: "#ccd0d8ff" }}>
            Je recherche en priorité un poste de <strong>développeur Full Stack</strong>{" "}
            au sein d'une équipe produit, à Amiens ou en télétravail. Je peux
            intervenir côté backend avec <strong>Java / Spring Boot</strong> ou{" "}
            <strong>Ruby on Rails</strong>, côté frontend avec{" "}
            <strong>React / TypeScript</strong>, et sur toute la chaîne de livraison,
            de la modélisation PostgreSQL aux tests, à la CI/CD et au déploiement.
          </p>

          <p style={{ color: "#ccd0d8ff" }}>
            Je suis ouvert au CDI, au CDD et au contrat de professionnalisation. Je
            peux également intervenir sur des missions freelance clairement cadrées
            pour des TPE, PME ou porteurs de projet.
          </p>

          <div className="home-group">
            <h3 className="home-h3">Ce que j’apporte à une équipe</h3>
            <ul className="home-bullets" style={{ marginTop: 8 }}>
              <li>
                Une vision de bout en bout : besoin métier, modèle de données, API,
                interface, tests et livraison.
              </li>
              <li>
                Des backends sécurisés : authentification, rôles,{" "}
                <strong>JWT en cookies HttpOnly</strong>, isolation multi-tenant et
                règles métier contrôlées côté serveur.
              </li>
              <li>
                Des interfaces <strong>React / TypeScript</strong> claires,
                responsives et accessibles, connectées à de vraies API.
              </li>
              <li>
                Une pratique concrète de la qualité : RSpec, Vitest, Testing Library,
                lint, revues de code, documentation et CI GitHub Actions.
              </li>
              <li>
                De l’autonomie, de la rigueur et une vraie compréhension produit
                issue de mon expérience du management et de l’entrepreneuriat.
              </li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Domaines d’intervention</h3>
            <ul className="home-badges">
              <li>Applications métier & SaaS</li>
              <li>API REST & sécurité</li>
              <li>Java / Spring Boot</li>
              <li>Ruby on Rails</li>
              <li>React / TypeScript</li>
              <li>PostgreSQL & multi-tenant</li>
              <li>Tests & CI/CD</li>
              <li>Sites vitrines performants</li>
            </ul>
          </div>

          <p style={{ marginTop: 10, color: "#ccd0d8ff" }}>
            👉 Si vous recherchez un développeur capable de comprendre le métier
            autant que la technique,{" "}
            <a href="#contact" onClick={scrollToId("contact")}>
              échangeons directement
            </a>
            .
          </p>
        </section>

        {/* ✅ "À propos" — positionnement à jour (sprint accueil R2) */}
        <section id="a-propos" className="home-card home-span-2">
          <h2 className="home-h2">À propos</h2>

          <p style={{ marginTop: 8, color: "#ccd0d8ff" }}>
            Titulaire d’un <strong>titre de Concepteur Développeur d’Applications
            (RNCP niveau 6)</strong> et d’un <strong>titre en management de niveau 6</strong>,
            je conçois des produits web complets : cadrage du besoin, modélisation
            des données, API sécurisée, interface utilisateur, tests, CI/CD et
            déploiement.
          </p>

          <p style={{ color: "#ccd0d8ff" }}>
            Mes projets récents illustrent cette progression :{" "}
            <strong>AgencyOS</strong>, un SaaS multi-tenant développé avec Java 21,
            Spring Boot, React et PostgreSQL ; <strong>Sereno</strong>, une
            plateforme de facturation électronique construite avec Ruby on Rails et
            React, dotée d’un socle Factur-X et de contrôles de conformité
            automatisés ; ainsi que plusieurs applications métier, outils créatifs
            et vitrines web en React, TypeScript, Astro et Three.js.
          </p>

          <p style={{ color: "#ccd0d8ff" }}>
            Mon expérience du management et de l’entrepreneuriat m’aide à
            transformer un besoin réel en solution compréhensible et maintenable.
            J’avance par étapes courtes, je protège l’existant, je documente mes
            décisions et je préfère une fonctionnalité prouvée par les tests à une
            promesse difficile à vérifier. Ma sensibilité visuelle complète ce
            profil technique lorsque l’interface et l’expérience utilisateur font
            partie du problème à résoudre.
          </p>

          <div className="home-group">
            <h3 className="home-h3">Backend & API</h3>
            <ul className="home-badges">
              <li>Java 21</li>
              <li>Spring Boot 4</li>
              <li>Ruby 3</li>
              <li>Ruby on Rails 8</li>
              <li>API REST</li>
              <li>Spring Security</li>
              <li>JWT HttpOnly</li>
              <li>Pundit</li>
              <li>BCrypt</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Frontend & expérience web</h3>
            <ul className="home-badges">
              <li>React</li>
              <li>TypeScript strict</li>
              <li>JavaScript</li>
              <li>Vite</li>
              <li>Astro</li>
              <li>Tailwind CSS</li>
              <li>CSS Modules</li>
              <li>Three.js / React Three Fiber</li>
              <li>Responsive & accessibilité</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Données & architecture</h3>
            <ul className="home-badges">
              <li>PostgreSQL</li>
              <li>MariaDB / MySQL</li>
              <li>SQL</li>
              <li>JPA / Hibernate</li>
              <li>Active Record</li>
              <li>Flyway / migrations Rails</li>
              <li>Multi-tenant</li>
              <li>RBAC</li>
              <li>MCD / MLD</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Qualité & livraison</h3>
            <ul className="home-badges">
              <li>RSpec</li>
              <li>Vitest</li>
              <li>Testing Library</li>
              <li>ESLint</li>
              <li>Git / GitHub</li>
              <li>GitHub Actions</li>
              <li>CI/CD</li>
              <li>Docker</li>
              <li>OpenAPI / Postman</li>
              <li>Documentation technique</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Produit & méthodes</h3>
            <ul className="home-badges">
              <li>Analyse du besoin métier</li>
              <li>Architecture en couches</li>
              <li>Sécurité applicative</li>
              <li>Conformité Factur-X</li>
              <li>Accessibilité</li>
              <li>Performance web</li>
              <li>SEO local</li>
              <li>Scrum / travail itératif</li>
              <li>Revue de code & dette technique</li>
            </ul>
          </div>
        </section>

        {/* ✅ Vidéo déplacée en section secondaire, après "À propos" — elle
            n'utilise plus la grille 1fr/2fr (supprimée pour l'accueil, cf.
            .home-index-page .home-main dans Home.css) et son poids visuel
            est désormais maîtrisé (largeur plafonnée), cohérent avec les
            autres cartes. Le contenu et l'avertissement honnête sur son
            ancienneté sont conservés à l'identique. */}
        <section className="home-card home-video home-video-parcours">
          <h2 className="home-h2">Mon parcours — Du code à la création</h2>

          <div className="home-video-wrap">
            <iframe
              src="https://www.youtube-nocookie.com/embed/DVOQzauF8Es?rel=0&modestbranding=1"
              title="Portfolio vidéo"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* ✅ Texte de clarification (pré-CDA / post-CDA) */}
          <p className="home-video-note">
            ⚠️ Cette vidéo a été réalisée avant ma formation Concepteur
            Développeur d’Applications (CDA).
            <br />
            Elle présente mon parcours, mon profil et ma démarche.
            <br />
            👉 Les vidéos suivantes présentent mes projets post-CDA, avec
            démonstrations techniques détaillées.
          </p>

          <p style={{ textAlign: "center", marginTop: 8 }}>
            <a
              href="https://www.youtube.com/watch?v=DVOQzauF8Es"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir la vidéo sur YouTube
            </a>
          </p>
        </section>

        <section id="contact" className="home-card home-span-2">
          <h2 className="home-h2">Contact</h2>

          <ul className="home-contact">
            <li>
              <a className="home-chip" href="mailto:sebastien.cantrelle@hotmail.fr">
                📧&nbsp;sebastien.cantrelle@hotmail.fr
              </a>
            </li>

            <li>
              <a
                className="home-chip"
                href="tel:+33629464593"
                aria-label="Appeler 06 29 46 45 93"
              >
                📞&nbsp;06&nbsp;29&nbsp;46&nbsp;45&nbsp;93
              </a>
            </li>

            <li>
              <a
                className="home-chip"
                href="https://github.com/Spiritzen"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon-cat"
                  src={`${base}images/chat.svg`}
                  alt=""
                  aria-hidden="true"
                />
                GitHub
              </a>
            </li>

            <li>
              <a
                className="home-chip"
                href="https://fr.linkedin.com/in/sebastien-cantrelle-26b695106"
                target="_blank"
                rel="noreferrer"
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
              <a
                className="home-chip"
                href="https://www.youtube.com/watch?v=DVOQzauF8Es"
                target="_blank"
                rel="noreferrer"
              >
                🎬&nbsp;Portfolio vidéo
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="home-footer">
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — Portfolio</small>
      </footer>
    </div>
  );
}
