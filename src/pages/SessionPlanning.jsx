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
          {/* Avatar = retour accueil (avec hint) */}
          <Link
            to="/"
            className="home-avatar-link"
            aria-label="Retour à l’accueil"
            title="Accueil"
          >
            <img
              className="home-avatar"
              src={`${base}images/sessionPlanning/logo.png`}
              alt="Session Planning — retour à l’accueil"
            />
      
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">Session Planning</h1>
            <span className="home-tag">Étude de cas</span>
            <p className="home-subtitle">
              Application de gestion de sessions de formation : planification, affectations, collisions horaires, rôles & sécurité (JWT).
            </p>
          </div>

          {/* Bouton retour accueil */}
          <Link className="home-cta" to="/" aria-label="Retour à l’accueil">
            Accueil
          </Link>
        </div>
      </header>

      <main className="home-main">
        {/* ✅ Contexte (colonne de gauche) */}
        <section id="contexte" className="home-card home-projets">
          <h2 className="home-h2">Contexte (quick)</h2>

          <p>
            Projet CDA orienté <strong>règles métier</strong> : gestion de sessions, affectations de formateurs,
            et <strong>détection des collisions</strong> sur les créneaux horaires.
            Objectif : une organisation claire pour chaque acteur (admin / gestionnaire / école / formateur),
            avec sécurité <strong>JWT</strong>.
          </p>

          <ul className="home-badges">
            <li>React</li>
            <li>Vite</li>
            <li>Spring Boot</li>
            <li>REST • JWT</li>
            <li>SQL</li>
            <li>Règles métier</li>
          </ul>
        </section>

        {/* ✅ Vidéo (colonne de droite) */}
        <section className="home-card home-video">
          <h2 className="home-h2">Vidéo de démonstration</h2>

          <div className="home-video-wrap">
            <iframe
              src="https://www.youtube-nocookie.com/embed/REPLACE_ME?rel=0&modestbranding=1"
              title="Demo Session Planning"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="home-video-fallback">
            <a href="https://www.youtube.com/watch?v=REPLACE_ME" target="_blank" rel="noreferrer">
              Ouvrir sur YouTube
            </a>
          </p>
        </section>

        {/* ✅ Carrousel pleine largeur */}
        <div className="home-span-2">
          <CarrouselSessionPlanning />
        </div>

        {/* ✅ Présentation (pleine largeur) */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Contexte du projet & objectifs</h2>

          <p style={{ marginTop: 6 }}>
            <b>Session Planning</b> est une application destinée à gérer l’organisation de sessions de formation,
            l’affectation de formateurs et la supervision des disponibilités.
            Elle répond à un besoin réel du secteur de la formation professionnelle : plannings complexes,
            contraintes horaires strictes, profils variés et échanges constants entre écoles et intervenants.
          </p>

          <ul className="home-bullets" style={{ marginTop: 10 }}>
            <li>Enregistrement des sessions (dates, horaires, lieux, écoles)</li>
            <li>Affectation des formateurs en respectant leurs disponibilités</li>
            <li>Détection et prévention des collisions horaires</li>
            <li>Gestion d’un cycle de vie précis des sessions</li>
            <li>Visibilité claire du planning pour chaque acteur</li>
          </ul>

          <h3 className="home-h3" style={{ marginTop: 16 }}>
            Règles métier clés
          </h3>
          <ul className="home-bullets">
            <li>Un formateur ne peut pas être affecté à deux sessions simultanément</li>
            <li>Une affectation peut être proposée puis acceptée ou refusée</li>
            <li>Une session en statut <b>Brouillon</b> est modifiable librement</li>
            <li>Une session <b>Confirmée</b> doit être verrouillée et cohérente</li>
            <li>Les écoles consultent l’historique des propositions</li>
          </ul>

          <h3 className="home-h3" style={{ marginTop: 16 }}>
            Modèle & architecture
          </h3>
          <p>
            Le modèle relationnel repose sur les entités <b>Formateur</b>, <b>Session</b>, <b>Affectation</b> et <b>École</b>.
            L’application suit une architecture en couches : Controllers, Services (règles métier), Repositories, DTOs & projections
            pour des échanges propres et performants.
          </p>

          <h3 className="home-h3" style={{ marginTop: 16 }}>
            Gestion des collisions (cœur technique)
          </h3>
          <p>
            Une session est conflictuelle lorsqu’elle chevauche une autre session confirmée sur le même créneau :
          </p>

          <pre className="home-code">
A.date_debut &lt; B.date_fin{"\n"}
ET{"\n"}
A.date_fin &gt; B.date_debut
          </pre>

          <p>
            Cette logique est intégrée dans une requête SQL optimisée appelée depuis un Repository Spring Boot,
            garantissant cohérence métier et performance.
          </p>

          <h3 className="home-h3" style={{ marginTop: 16 }}>
            Bilan & perspectives
          </h3>
          <p>
            Ce projet m’a renforcé sur l’analyse métier, la conception de règles complexes et une API robuste.
            Évolutions possibles : export PDF, vue calendrier, notifications automatiques, interface mobile.
          </p>
        </section>
      </main>

      <footer className="home-footer">
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — Portfolio</small>
      </footer>
    </div>
  );
}
