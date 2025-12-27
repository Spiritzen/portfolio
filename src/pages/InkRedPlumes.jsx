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
                    {/* Avatar = retour accueil (avec hint au survol) */}
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
                        <span className="home-tag">Étude de cas</span>
                        <p className="home-subtitle">
                            Application web (React + Spring Boot). Présentation, captures, vidéo et explications du projet.
                        </p>
                    </div>

                    {/* Bouton retour accueil */}
                    <Link className="home-cta" to="/" aria-label="Retour à l’accueil">
                        Accueil
                    </Link>
                </div>
            </header>

            <main className="home-main">
                {/* Vidéo (colonne de droite en desktop) */}
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
                        <a href="https://www.youtube.com/watch?v=0VqsB_-Sshw" target="_blank" rel="noreferrer">
                            Ouvrir sur YouTube
                        </a>
                    </p>
                </section>

                {/* Contexte (colonne de gauche en desktop) */}
                <section id="contexte" className="home-card home-projets">
                    <h2 className="home-h2">Contexte (quick)</h2>
                    <p>
                        Projet fil rouge CDA (AFCI) : marketplace d’édition/vente de livres, avec rôles acheteur et vendeur,
                        conforme au cahier des charges. Stack : React (Vite) + Spring Boot (REST, JWT) + MariaDB/MySQL.
                    </p>
                    <ul className="home-badges">
                        <li>React</li><li>Vite</li><li>Spring Boot</li><li>REST • JWT</li>
                        <li>MariaDB/MySQL</li><li>Docker (dev)</li>
                    </ul>
                </section>

                {/* Carrousel pleine largeur (modale avec navigation ‹ / › intégrée) */}
                <CarrouselIRP />

                {/* Contexte & objectifs — pleine largeur */}
                <section id="objectifs" className="home-card home-span-2">
                    <h2 className="home-h2">Contexte & objectifs</h2>

                    <p style={{ marginTop: 6 }}>
                        Projet fil rouge CDA (AFCI). <em>Ink Red Plumes</em> est une marketplace d’édition/vente de livres
                        avec deux rôles (acheteur, vendeur). Front en SPA (React) : navigation client et formulaires en
                        <strong> modales</strong> pour publier/éditer sans rechargement. Charte graphique et accessibilité
                        respectées pour une expérience fluide sur desktop et mobile.
                    </p>

                    <div className="home-group">
                        <h3 className="home-h3">Objectifs (SMART)</h3>
                        <ul className="irp-list">
                            <li><strong>O1.</strong> Authentification <strong>JWT</strong> + rôles <strong>buyer/seller</strong>, CRUD livres &amp; catégories (endpoints prioritaires couverts).</li>
                            <li><strong>O2.</strong> UX sans rechargement : création/édition en <strong>modales</strong>, routing client, responsive ; <strong>Lighthouse ≥ 90</strong> (Perf/Accessibilité).</li>
                            <li><strong>O3.</strong> Recherche + filtres multi-critères avec pagination côté API &amp; UI cohérente.</li>
                            <li><strong>O4.</strong> Qualité : validations, journalisation, base de tests (unit/intég) et build CI.</li>
                        </ul>
                    </div>

                    <div className="home-group">
                        <h3 className="home-h3">KPIs</h3>
                        <ul className="irp-kpis">
                            <li>Couverture endpoints&nbsp;: <strong>100%</strong> (CRUD prioritaire)</li>
                            <li>Perf front (mobile)&nbsp;: <strong>Lighthouse ≥ 90</strong></li>
                            <li>API P95 (cible)&nbsp;: <strong>&lt; 300&nbsp;ms</strong></li>
                            <li>Bugs majeurs démo&nbsp;: <strong>0</strong></li>
                        </ul>
                        <p className="home-note" style={{ opacity: .85, marginTop: 8 }}>
                            Mesure P95 (local) : <code>npx autocannon -d 20 -c 20 http://localhost:8080/api/books</code>.
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

                        <h3 className="home-h3" style={{ marginTop: 10 }}>Hors périmètre (itérations futures)</h3>
                        <ul className="irp-list">
                            <li>Déploiement hébergé (LWS) + nom de domaine.</li>
                            <li>Notifications temps réel.</li>
                            <li>Back-office avancé.</li>
                        </ul>
                    </div>

                    <div className="home-group">
                        <h3 className="home-h3">Contraintes & risques</h3>
                        <ul className="irp-list">
                            <li>Planning d’évaluation (CDA) serré.</li>
                            <li>Pas de BDD managée en ligne (pour l’instant).</li>
                            <li>Arbitrage features vs. performance/qualité.</li>
                        </ul>
                    </div>

                    <div className="home-group">
                        <h3 className="home-h3">Stratégie de démo</h3>
                        <ul className="irp-list">
                            <li>Parcours clé A→Z (recherche → détail → achat simulé / publication).</li>
                            <li>Zoom technique : JWT, structure des endpoints, MCD/MLD.</li>
                            <li>Mesures : Lighthouse (front) + bench local (API).</li>
                        </ul>
                    </div>
                </section>

                {/* Liens */}
                <section className=" home-card home-span-2">
                    <h2 className="home-h2">Liens</h2>
                    <ul className="home-contact">
                        <li>
                            <Link
                                className="home-chip"
                                to={{ pathname: "/", hash: "#top" }}  // 👈 objet { pathname, hash }
                                replace
                            >
                                ← Retour à l’accueil
                            </Link>
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
                                    src={`${import.meta.env.BASE_URL}images/chat.svg`}
                                    alt=""
                                    aria-hidden="true"
                                />
                                GitHub
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
                    </ul>
                </section>
            </main>

            <footer className="home-footer">
                <small>© {new Date().getFullYear()} Sébastien Cantrelle — Ink Red Plumes</small>
            </footer>
        </div>
    );
}
