import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./AgencyOS.css";

export default function AgencyOS() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const base = import.meta.env.BASE_URL;

  return (
    <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>

      {/* HEADER — identique aux autres pages */}
      <header className="home-hero">
        <div className="home-hero-row">

          {/* Avatar "A" violet — pas d'image */}
          <Link to="/" className="home-avatar-link" aria-label="Retour à l'accueil">
            <div className="aos-avatar" aria-hidden="true">A</div>
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">
              <a
                href="https://agencyos.fr"
                target="_blank"
                rel="noreferrer"
                className="aos-title-link"
                aria-label="Ouvrir AgencyOS en ligne"
                title="agencyos.fr"
              >
                AgencyOS
              </a>
            </h1>
            <span className="home-tag">Plateforme SaaS multi-tenant</span>
            <p className="home-subtitle">
              Solution SaaS complète pour agences digitales : CRM, projets, gestion équipes,
              finance, facturation, reporting et automatisation.
              Architecture multi-tenant sécurisée et prête pour la production.
            </p>
          </div>

          <Link className="home-cta" to="/">← Portfolio</Link>
        </div>
      </header>

      <main className="aos-main">

        {/* HERO CARD — image + récap côte à côte */}
        <section className="home-card aos-hero-card">
          <h2 className="home-h2">Plateforme en production</h2>

          <div className="aos-layout">
            {/* GAUCHE — résumé technique */}
            <div className="aos-recap">
              <h3 className="home-h3">Résumé technique</h3>
              <p style={{ color: "#ccd0d8", lineHeight: 1.7 }}>
                Plateforme SaaS <strong>multi-tenant</strong> conçue pour centraliser
                l'ensemble des opérations d'une agence digitale :
                CRM, gestion de projets, finance et reporting.
              </p>
              <ul className="home-bullets">
                <li><strong>Isolation des données</strong> par organisation (tenant)</li>
                <li><strong>Authentification JWT</strong> stateless + RBAC</li>
                <li><strong>Architecture en couches :</strong> Controller → Service → Repository</li>
                <li><strong>Validation métier</strong> appliquée côté API</li>
                <li><strong>Déploiement Docker</strong> sur VPS Linux sécurisé HTTPS</li>
              </ul>
              <ul className="home-badges" style={{ marginTop: 12 }}>
                <li className="badge-blue">React</li>
                <li className="badge-blue">TypeScript</li>
                <li className="badge-violet">Spring Boot</li>
                <li className="badge-violet">JWT</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
              </ul>
            </div>

            {/* DROITE — screenshot */}
            <div className="aos-img-wrap">
              <a
                href="https://agencyos.fr"
                target="_blank"
                rel="noreferrer"
                className="aos-screenshot-link"
                aria-label="Voir AgencyOS en ligne sur agencyos.fr"
                title="Ouvrir agencyos.fr"
              >
                <img
                  src={`${base}images/agencyos.jpg`}
                  alt="Interface AgencyOS — dashboard"
                  className="aos-screenshot"
                  width="700"
                  height="440"
                  loading="lazy"
                />
                <div className="aos-screenshot-overlay">
                  <span className="aos-screenshot-cta">
                    🌐 Voir la plateforme en ligne
                  </span>
                </div>
              </a>

              <a
                href="https://agencyos.fr"
                target="_blank"
                rel="noreferrer"
                className="aos-live-badge"
                aria-label="Accéder à agencyos.fr"
              >
                <span className="aos-live-dot" aria-hidden="true"></span>
                En production sur agencyos.fr
                <span className="aos-live-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* POURQUOI */}
        <section className="home-card aos-span-2 aos-card-why">
          <h2 className="home-h2">Pourquoi AgencyOS ?</h2>
          <p style={{ color: "#ccd0d8", lineHeight: 1.7, marginTop: 8 }}>
            Les agences digitales jonglent entre plusieurs outils : CRM, gestion de projet,
            facturation, feuilles de temps et reporting. Les données sont fragmentées,
            dupliquées et peu fiables. AgencyOS centralise l'ensemble du workflow dans
            une plateforme unique, sécurisée et orientée rentabilité.
          </p>
        </section>

        {/* STACK */}
        <section className="home-card aos-span-2 aos-card-stack">
          <h2 className="home-h2">Stack technique</h2>
          <div className="home-group">
            <h3 className="home-h3">Backend</h3>
            <ul className="home-badges">
              <li className="badge-violet">Spring Boot 4</li>
              <li className="badge-violet">Java 21</li>
              <li className="badge-violet">Spring Security 7</li>
              <li className="badge-violet">JWT HttpOnly Cookies</li>
              <li className="badge-violet">Flyway</li>
            </ul>
          </div>
          <div className="home-group">
            <h3 className="home-h3">Frontend</h3>
            <ul className="home-badges">
              <li className="badge-blue">React 18</li>
              <li className="badge-blue">TypeScript</li>
              <li className="badge-blue">Vite</li>
              <li className="badge-blue">Tailwind v4</li>
              <li className="badge-blue">Recharts</li>
            </ul>
          </div>
          <div className="home-group">
            <h3 className="home-h3">Infra & Data</h3>
            <ul className="home-badges">
              <li>PostgreSQL 16</li>
              <li>Docker</li>
              <li>VPS Linux</li>
              <li>HTTPS</li>
              <li>n8n</li>
            </ul>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="home-card aos-span-2 aos-card-archi">
          <h2 className="home-h2">Architecture & sécurité</h2>
          <ul className="home-bullets" style={{ marginTop: 8 }}>
            <li><strong>Multi-tenant :</strong> isolation stricte des données par organisation — OrganisationContext injecté dans chaque requête</li>
            <li><strong>JWT HttpOnly Cookies :</strong> access token 15min + refresh 7j — zéro localStorage</li>
            <li><strong>RBAC :</strong> 4 rôles — SUPER_ADMIN · MANAGER · MEMBER · CLIENT</li>
            <li><strong>17 entités JPA :</strong> Auth · CRM · Projet · Finance — UUID partout</li>
            <li><strong>Migrations versionnées :</strong> Flyway V1→V4 — ddl-auto: validate</li>
          </ul>
        </section>

        {/* FONCTIONNALITÉS */}
        <section className="home-card aos-span-2 aos-card-features">
          <h2 className="home-h2">Fonctionnalités clés</h2>
          <ul className="home-bullets" style={{ marginTop: 8 }}>
            <li>Dashboard temps réel — KPIs, CA, dépenses, tâches, factures (Recharts)</li>
            <li>CRM intégré — clients, contacts, pipeline</li>
            <li>Gestion projets & tâches — Kanban, phases, progression automatique</li>
            <li>Module finance — devis, factures, paiements, dépenses</li>
            <li>Timesheet — saisie heures, rentabilité par projet, alertes budget</li>
            <li>Automatisation — relances et rapports via n8n self-hosted</li>
          </ul>
        </section>

        {/* ÉVOLUTION */}
        <section className="home-card aos-span-2 aos-card-evolution">
          <h2 className="home-h2">Mon évolution technique</h2>
          <p style={{ color: "#ccd0d8", lineHeight: 1.7, marginTop: 8 }}>
            AgencyOS marque un saut qualitatif majeur par rapport aux projets CDA :
          </p>
          <ul className="home-bullets">
            <li>Applications métier isolées → plateforme SaaS multi-tenant complète</li>
            <li>Implémentation d'une vraie architecture multi-tenant RGPD</li>
            <li>Gestion avancée de la sécurité : JWT cookies, BCrypt strength 12, RBAC</li>
            <li>Déploiement Docker sur VPS en production HTTPS</li>
            <li>Vision produit orientée rentabilité et scalabilité</li>
          </ul>
        </section>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="home-card aos-span-2 aos-card-contact">
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
                href="https://agencyos.fr"
                target="_blank"
                rel="noreferrer"
              >
                🌐&nbsp;agencyos.fr
              </a>
            </li>
            <li>
              <Link className="home-chip home-chip-accent" to="/" replace>
                ← Retour au portfolio
              </Link>
            </li>
          </ul>
        </section>

      </main>

      <footer className="home-footer">
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — AgencyOS</small>
      </footer>
    </div>
  );
}
