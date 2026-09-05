// src/pages/InkRedPlumes.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import { getIRPSlides } from "../data/dataIRPSlides.js";
import "./Home.css";
import "./InkRedPlumes.css";

export default function InkRedPlumes() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const base = import.meta.env.BASE_URL;
  const slides = getIRPSlides(base);

  return (
    <div className={`home-page theme-ink-marble ink-red-plumes-page ${loaded ? "home-fade-in" : ""}`}>
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
              width="120"
              height="120"
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

          <div className="irp-video-actions">
            <a
              className="home-chip"
              href="https://www.youtube.com/watch?v=0VqsB_-Sshw"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir sur YouTube
            </a>
            <a
              className="home-chip home-chip-accent"
              href="https://github.com/Spiritzen/InkRedPlumes"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon-cat" src={`${base}images/chat.svg`} alt="" aria-hidden="true" />
              GitHub – InkRedPlumes
            </a>
          </div>
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
            <li className="badge-blue">React</li>
            <li className="badge-blue">Vite</li>
            <li className="badge-blue">Spring Boot</li>
            <li className="badge-blue">REST • JWT</li>
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
            <li>
              <b>Intégrité métier</b> : contrôles JWT, rôles et validations appliqués côté API, même si le frontend est contourné
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
        <Carousel slides={slides} />

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

        {/* Du besoin au produit — trois cartes courtes */}
        <section id="objectifs" className="home-card home-span-2">
          <h2 className="home-h2">Du besoin au produit</h2>
          <div className="irp-journey-grid" style={{ marginTop: 8 }}>
            <article className="irp-journey-card">
              <h3 className="home-h3">Besoin</h3>
              <p>
                Permettre à des vendeurs de publier et gérer leurs livres, tout
                en offrant aux acheteurs un catalogue consultable avec
                recherche, filtres et détails.
              </p>
            </article>
            <article className="irp-journey-card">
              <h3 className="home-h3">Solution</h3>
              <p>
                Une SPA React consomme une API Spring Boot sécurisée par JWT,
                avec des droits distincts pour buyer, seller et admin, et une
                base relationnelle MariaDB/MySQL.
              </p>
            </article>
            <article className="irp-journey-card">
              <h3 className="home-h3">Résultat</h3>
              <p>
                Un parcours complet sans rechargement : connexion,
                navigation, recherche, consultation et actions autorisées
                selon le rôle, avec validation côté serveur.
              </p>
            </article>
          </div>
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