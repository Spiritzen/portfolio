import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { setLoaded(true); }, []);

      // ✅ Base publique (dépend de vite.config.js → base: '/portfolio/')
  const base = import.meta.env.BASE_URL;

    return (
        <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>
            <header className="home-hero">
                <div className="home-hero-row">
                      {/* CHANGÉ: /images/... → ${base}images/... */}
          <img
            className="home-avatar"
            src={`${base}images/avatar.jpg`}
            alt="Sébastien Cantrelle"
          />
                    <div className="home-hero-info">
                        <h1 className="home-title">Sébastien Cantrelle</h1>
                        <span className="home-tag">Portfolio</span>
                        <p className="home-subtitle">Développeur Full-stack & Artiste 2D/3D</p>
                    </div>


                    <a className="home-cta" href="#projets">Voir mes projets</a>
                </div>
            </header>

            <main className="home-main">

                <section id="projets" className="home-card home-projets">
                    <h2 className="home-h2">Projets récents</h2>
                    <ul className="home-grid">
                        <li className="home-tile">Ink Red Plumes (React + Spring)</li>
                        <li className="home-tile">CC Location (.NET/C# + RazorPage)</li>
                        <li className="home-tile">EcoList (Android/Kotlin)</li>
                        <li className="home-tile">Dev-Game Unity (C#)</li>
                        <li className="home-tile">Artist 2D/3D (Blender/photoshop)</li>
                    </ul>
                </section>

                <section className="home-card home-video">
                    <h2 className="home-h2">Vidéo de présentation</h2>

                    {/* YouTube */}
                    <div className="home-video-wrap">
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/DVOQzauF8Es?rel=0&modestbranding=1"
                            title="Portfolio vidéo"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <p style={{ textAlign: "center", marginTop: 8 }}>
                        <a href="https://www.youtube.com/watch?v=DVOQzauF8Es" target="_blank" rel="noreferrer">
                            Ouvrir la vidéo sur YouTube
                        </a>
                    </p>

                    {/* Vidéo locale (option) */}
                    {/* 
          <video
            className="home-video-local"
            src="/videos/intro.mp4"
            controls
            preload="metadata"
            poster="/images/avatar.jpg"
            playsInline
          />
          */}
                </section>
                <section id="a-propos" className="home-card home-span-2">
                    <h2 className="home-h2">À propos</h2>

                    <p style={{ marginTop: 8, color: "#ccd0d8ff" }}>
                        Développeur full-stack <strong>(React • Spring Boot • .NET Razor Pages)</strong> et artiste 2D/3D
                        <strong> (Blender • Photoshop)</strong>. Actuellement en formation CDA (niveau 6) à l’AFCI,
                        je conçois des applications web robustes, soignées côté UX et performantes.
                    </p>
                    <p style={{ color: "#ccd0d8ff" }}>
                        Je pratique une <strong>veille technique</strong> quotidienne et j’itère en binôme avec un
                        <strong> assistant IA</strong> (structuration, tests, documentation) pour livrer vite et bien.
                        Ma philosophie&nbsp;: simplicité, accessibilité, performance, et un code clair.
                    </p>

                    <div className="home-group">
                        <h3 className="home-h3">Tech & Langages</h3>
                        <ul className="home-badges">
                            <li>React</li><li>Vite</li><li>HTML</li><li>CSS</li>
                            <li>JavaScript</li><li>TypeScript (en cours)</li>
                            <li>Java</li><li>Spring Boot</li><li>.NET Razor Pages (C#)</li>
                            <li>Android Studio</li><li>Kotlin (initiation)</li>
                        </ul>
                    </div>

                    <div className="home-group">
                        <h3 className="home-h3">Données & Modélisation</h3>
                        <ul className="home-badges">
                            <li>Dictionnaire de données</li><li>MCD/MLD</li><li>Looping</li>
                            <li>SQL • MySQL</li><li>HeidiSQL</li>
                        </ul>
                    </div>

                    <div className="home-group">
                        <h3 className="home-h3">Outils, IDE & DevOps</h3>
                        <ul className="home-badges">
                            <li>Git</li><li>Git Bash</li><li>VS Code</li><li>Eclipse</li>
                            <li>Docker</li><li>Postman</li>
                        </ul>
                    </div>

                    <div className="home-group">
                        <h3 className="home-h3">Archi & Paradigmes</h3>
                        <ul className="home-badges">
                            <li>POO (SOLID)</li><li>MVC</li><li>REST • JWT</li>
                        </ul>
                    </div>

                    <div className="home-group">
                        <h3 className="home-h3">Méthodo & Qualité</h3>
                        <ul className="home-badges">
                            <li>Scrum</li><li>Jira</li><li>Clean Code</li><li>Tests & debug</li>
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
                            {/* Lien d'appel direct en format international */}
                            <a className="home-chip" href="tel:+33629464593" aria-label="Appeler 06 29 46 45 93">
                                📞&nbsp;06&nbsp;29&nbsp;46&nbsp;45&nbsp;93
                            </a>
                        </li>

                        <li>
                            {/* Remplace l'URL GitHub par la tienne si besoin */}
                            <a
                                className="home-chip"
                                href="https://github.com/Spiritzen"
                                target="_blank" rel="noreferrer"
                            >
                                🐙&nbsp;GitHub
                            </a>
                        </li>



                        <li>
                            <a
                                className="home-chip"
                                href="https://fr.linkedin.com/in/sebastien-cantrelle-26b695106"
                                target="_blank" rel="noreferrer"
                            >
                                🔗&nbsp;LinkedIn
                            </a>
                        </li>

                        <li>
                            {/* Mets ton CV dans /public/cv.pdf pour que ce lien fonctionne */}
                            <a className="home-chip" href={`${base}cv.pdf`} download>
                📄&nbsp;CV (PDF)
              </a>
                        </li>

                        <li>
                            <a
                                className="home-chip"
                                href="https://www.youtube.com/watch?v=DVOQzauF8Es"
                                target="_blank" rel="noreferrer"
                            >
                                🎬&nbsp;Portfolio vidéo
                            </a>
                        </li>

                    </ul>
                </section>
            </main>

            <footer className="home-footer">
                <small>
                    © {new Date().getFullYear()} Sébastien Cantrelle — Portfolio

                </small>
            </footer>

        </div>
    );
}
