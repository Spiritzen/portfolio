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

  const goToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) history.replaceState(null, "", "#contact");
  };

  return (
    <div
      id="top"
      className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}
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
                Open to work
              </span>
            </h1>
            <span className="home-tag">Fullstack Java / Spring / React</span>
            <p className="home-subtitle">Développeur Full-stack & Artiste 2D/3D</p>
          </div>

          <a className="home-cta" href="#contact" onClick={goToContact}>
            Contact
          </a>
        </div>
      </header>

      <main className="home-main">
        <section id="projets" className="home-card home-projets">
          <h2 className="home-h2">Projets récents</h2>

          <ul className="home-grid">
            {/* ✅ 1) Creative Suite en premier — projet le plus récent */}

            <li className="home-tile home-tile-agency">
              <Link className="home-link-tile" to="/agencyos">
                <span>AgencyOS</span>
                <span className="home-tile-tech badge-agency">
                 React · Spring · PostgreSQL · Docker
                </span>
              </Link>
            </li>
            <li className="home-tile home-tile-featured">
              <Link className="home-link-tile" to="/creative-suite">
                <span>✦ Creative Suite</span>
                <span className="home-tile-tech badge-rainbow">BeatStudio · EasyStudio · MotionStudio</span>
              </Link>
            </li>

            <li className="home-tile home-tile-mydash">
              <Link className="home-link-tile" to="/session-planning">
                <span>MyDashServ</span>
                <span className="home-tile-tech badge-blue">React · Spring · MariaDB</span>
              </Link>
            </li>

            <li className="home-tile home-tile-irp">
              <Link className="home-link-tile" to="/ink-red-plumes">
                <span>Ink Red Plumes</span>
                <span className="home-tile-tech badge-blue">React · Spring · MySQL</span>
              </Link>
            </li>

            <li className="home-tile home-tile-cc">
              <Link className="home-link-tile" to="/cc-location">
                <span>CC Location</span>
                <span className="home-tile-tech badge-violet">.NET · C# · Azure</span>
              </Link>
            </li>

            <li className="home-tile home-tile-eco">
              <Link className="home-link-tile" to="/ecolist">
                <span>EcoList</span>
                <span className="home-tile-tech badge-green">Android · Kotlin</span>
              </Link>
            </li>

            <li className="home-tile home-tile-unity">
              <Link className="home-link-tile" to="/dev-game-unity">
                <span>Dev-Game Unity</span>
                <span className="home-tile-tech badge-red">Unity · C#</span>
              </Link>
            </li>

            <li className="home-tile home-tile-artist">
              <Link className="home-link-tile" to="/artist-2d-3d">
                <span>Artist 2D/3D</span>
                <span className="home-tile-tech badge-orange">Blender · Photoshop</span>
              </Link>
            </li>

          </ul>
        </section>

        <section className="home-card home-video">
          <h2 className="home-h2">Mon parcours — From Code to Creation</h2>

          <div className="home-video-wrap">
            <iframe
              src="https://www.youtube-nocookie.com/embed/DVOQzauF8Es?rel=0&modestbranding=1"
              title="Portfolio vidéo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

        {/* ✅ NOUVEAU : Bloc “Ce que je cherche” (recruteur-friendly) */}
        <section id="recherche" className="home-card home-span-2">
          <h2 className="home-h2">Ce que je cherche</h2>

          <p style={{ marginTop: 8, color: "#ccd0d8ff" }}>
            Je recherche un poste <strong>backend Java / Spring Boot</strong> (ou{" "}
            <strong>fullstack React + Spring</strong>) en environnement
            professionnel, pour contribuer à des applications métier robustes.
          </p>

          <div className="home-group">
            <h3 className="home-h3">Ce que j’apporte à une équipe</h3>
            <ul className="home-bullets" style={{ marginTop: 8 }}>
              <li>
                API REST <strong>structurée et sécurisée</strong> (JWT / rôles), avec
                règles métier implémentées côté serveur.
              </li>
              <li>
                Modélisation <strong>SQL</strong> (MCD/MLD, contraintes, scripts), et
                approche orientée cohérence des données.
              </li>
              <li>
                Frontend React <strong>propre et maintenable</strong> (composants,
                UI cohérente, intégration API).
              </li>
              <li>
                Autonomie + rigueur : debug, refacto, documentation, et sens du
                “livrable” (portfolio, démos, cahier projet).
              </li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Type de missions idéales</h3>
            <ul className="home-badges">
              <li>API REST (CRUD + règles métier)</li>
              <li>Spring Security / JWT</li>
              <li>SQL / requêtes / procédures</li>
              <li>Intégration React</li>
              <li>Qualité & maintenance</li>
            </ul>
          </div>

          <p style={{ marginTop: 10, color: "#ccd0d8ff" }}>
            👉 Si mon profil correspond à vos besoins, le plus simple est de me
            contacter :{" "}
            <a href="#contact" onClick={goToContact}>
              accès direct ci-dessous
            </a>
            .
          </p>
        </section>

        {/* ✅ “À propos” retravaillé (plus orienté recruteurs tech) */}
        <section id="a-propos" className="home-card home-span-2">
          <h2 className="home-h2">À propos</h2>

          <p style={{ marginTop: 8, color: "#ccd0d8ff" }}>
            Développeur full-stack{" "}
            <strong>(React • Spring Boot • .NET Razor Pages)</strong> et artiste
            2D/3D <strong>(Blender • Photoshop)</strong>. Titulaire du{" "}
            <strong>titre CDA (RNCP niveau 6)</strong>, je conçois des applications
            web orientées métier, avec une attention particulière sur{" "}
            <strong>la sécurité</strong>, la <strong>cohérence des données</strong>{" "}
            et une <strong>UI claire</strong>.
          </p>

          <p style={{ color: "#ccd0d8ff" }}>
            Mon approche : une architecture en couches (Controller / Service /
            Repository), des règles métier côté backend (pas seulement côté UI),
            des endpoints propres, et une base SQL bien structurée. J’aime livrer
            du concret : une démo propre, un projet maintenable, et une logique
            “équipe” (lisibilité, conventions, documentation).
          </p>

          <div className="home-group">
            <h3 className="home-h3">Tech & Langages</h3>
            <ul className="home-badges">
              <li>React</li>
              <li>Vite</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript (en cours)</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>.NET Razor Pages (C#)</li>
              <li>Android Studio</li>
              <li>Kotlin (initiation)</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Données & Modélisation</h3>
            <ul className="home-badges">
              <li>Dictionnaire de données</li>
              <li>MCD/MLD</li>
              <li>Looping</li>
              <li>SQL • MySQL • MariaDB</li>
              <li>HeidiSQL</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Outils, IDE & DevOps</h3>
            <ul className="home-badges">
              <li>Git</li>
              <li>Git Bash</li>
              <li>VS Code</li>
              <li>Eclipse</li>
              <li>Docker</li>
              <li>Azure</li>
              <li>Postman</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Archi & Paradigmes</h3>
            <ul className="home-badges">
              <li>POO (SOLID)</li>
              <li>MVC</li>
              <li>REST • JWT</li>
            </ul>
          </div>

          <div className="home-group">
            <h3 className="home-h3">Méthodo & Qualité</h3>
            <ul className="home-badges">
              <li>Scrum</li>
              <li>Jira</li>
              <li>Clean Code</li>
              <li>Tests & debug</li>
            </ul>
          </div>
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