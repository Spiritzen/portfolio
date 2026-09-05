// src/pages/Sereno.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Sereno() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const base = import.meta.env.BASE_URL;

  return (
    <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>

      {/* HEADER — identique aux autres pages */}
      <header className="home-hero">
        <div className="home-hero-row">
          <Link to="/" className="home-avatar-link" aria-label="Retour à l'accueil">
            <div className="home-avatar-letter avatar-sereno" aria-hidden="true">S</div>
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">Sereno</h1>
            <span className="home-tag">SaaS de facturation électronique conforme</span>
            <p className="home-subtitle">
              Plateforme multi-tenant pour indépendants, micro-entrepreneurs et TPE françaises :
              devis, factures et avoirs au format Factur-X, transmission suivie et archivage légal.
            </p>
          </div>

          <Link className="home-cta" to="/">← Portfolio</Link>
        </div>
      </header>

      <main className="home-main">

        {/* STATUT HONNÊTE */}
        <section className="home-card home-span-2">
          <span className="status-pill status-dev">🛠️ Développement avancé</span>
          <p style={{ marginTop: 10, color: "#ccd0d8" }}>
            Le socle de conformité Factur-X est validé et gelé. Le raccordement à une
            Plateforme Agréée réelle, la monétisation et la mise en production finale
            restent en cours — Sereno n'est pas présenté comme en production et ne
            propose pas de démonstration en ligne.
          </p>
        </section>

        {/* PROBLÈME MÉTIER */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Le problème métier</h2>
          <p style={{ marginTop: 8, color: "#ccd0d8", lineHeight: 1.7 }}>
            La réforme française de la facturation électronique rend l'e-facture
            obligatoire pour toutes les entreprises assujetties à la TVA : réception
            électronique obligatoire au 1er septembre 2026, puis émission obligatoire
            pour les PME, TPE, micro-entreprises et indépendants au 1er septembre 2027.
            Les éditeurs installés visent surtout les PME accompagnées d'un cabinet
            comptable — l'indépendant seul, qui doit devenir conforme sans rien
            comprendre à la réglementation, reste mal servi.
          </p>
        </section>

        {/* CIBLE & SOLUTION */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Cible et solution</h2>
          <p style={{ marginTop: 8, color: "#ccd0d8", lineHeight: 1.7 }}>
            Sereno cible les indépendants, micro-entrepreneurs et TPE françaises qui
            doivent émettre des factures conformes sans expertise réglementaire.
            La plateforme génère des factures au format Factur-X (PDF/A-3 + XML CII),
            les transmet via une Plateforme Agréée, suit leur cycle de vie en temps
            réel et les archive légalement — l'objectif affiché est de cacher la
            complexité des formats et du routage derrière une UX rassurante, pas de
            vendre un logiciel de comptabilité classique.
          </p>
        </section>

        {/* FONCTIONNALITÉS MAJEURES */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Fonctionnalités majeures</h2>
          <ul className="home-bullets" style={{ marginTop: 8 }}>
            <li>Inscription OWNER et authentification JWT multi-tenant</li>
            <li>Devis, factures et lignes avec totaux HT/TVA/TTC agrégés par taux</li>
            <li>Génération Factur-X (PDF/A-3 + XML CII) et avoirs conformes (TypeCode 381, référence BT-25)</li>
            <li>Numérotation séquentielle sans trou, protégée par verrou applicatif</li>
            <li>Moteur de conformité pré-émission bloquant</li>
            <li>Transmission sandbox vers une Plateforme Agréée, suivi de statuts (webhook + polling)</li>
            <li>Relances (manuelle et planifiée), portail destinataire avec lien de partage</li>
            <li>Export comptable FEC en lecture seule</li>
          </ul>
        </section>

        {/* ARCHITECTURE MULTI-TENANT */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Architecture multi-tenant</h2>
          <ul className="home-bullets" style={{ marginTop: 8 }}>
            <li><strong>Isolation par organisation :</strong> chaque requête est scopée via <code>Current.organisation</code>, dérivé du JWT</li>
            <li><strong>Architecture en couches :</strong> Controllers → Services → Repositories (Rails 8, mode API)</li>
            <li><strong>22 entités</strong> réparties sur 6 domaines (Auth &amp; Tenant, CRM, Catalogue, Facturation, Cycle de vie, Transmission, Paiement)</li>
            <li><strong>Sécurité :</strong> JWT en cookies HttpOnly, BCrypt, autorisation par rôle via Pundit (4 rôles : SUPER_ADMIN, OWNER, COMPTABLE, MEMBRE)</li>
            <li><strong>Immutabilité légale :</strong> une facture émise n'est jamais modifiée — toute correction passe par un avoir</li>
          </ul>
        </section>

        {/* CONFORMITÉ FACTUR-X */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Conformité Factur-X</h2>
          <p style={{ marginTop: 8, color: "#ccd0d8", lineHeight: 1.7 }}>
            Selon le dépôt public, chaque facture et chaque avoir passe par plusieurs
            niveaux de validation officiels, rejoués en intégration continue à chaque
            commit : structure PDF/A-3b (veraPDF), structure XML CII (XSD Factur-X 1.09),
            règles métier EN 16931 (Schematron FeRD). Le profil France CTC / Flux 2 est
            annoncé validé au gel du socle légal, mais hors CI (aucun scénario public à
            ce jour). Le socle de conformité est versionné et gelé (tag
            <code> v0.3.0-conformite-fr</code>) : toute évolution ultérieure du produit a
            été construite par-dessus, sans le modifier.
          </p>
        </section>

        {/* QUALITÉ ET TESTS */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Qualité et tests</h2>
          <p style={{ marginTop: 8, color: "#ccd0d8", lineHeight: 1.7 }}>
            Le README public du dépôt annonce 888 exemples de tests backend (RSpec) et
            409 tests frontend (Vitest + Testing Library) verts lors de la campagne R6,
            une isolation multi-tenant testée (accès entre organisations refusé), ainsi
            qu'un pipeline GitHub Actions vert sur la branche principale (RSpec, RuboCop,
            audit de dépendances, gate de conformité). Ces chiffres sont ceux déclarés
            par le dépôt à la date de rédaction de cette page ; ils n'ont pas été
            ré-exécutés depuis ce portfolio.
          </p>
        </section>

        {/* STACK */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Stack technique</h2>
          <div className="home-group">
            <h3 className="home-h3">Backend</h3>
            <ul className="home-badges">
              <li className="badge-teal">Ruby on Rails 8.1 (API)</li>
              <li className="badge-teal">Ruby 3.3+</li>
              <li>PostgreSQL 16</li>
              <li>JWT (cookies HttpOnly)</li>
              <li>BCrypt</li>
              <li>Pundit</li>
              <li>Solid Queue</li>
            </ul>
          </div>
          <div className="home-group">
            <h3 className="home-h3">Frontend</h3>
            <ul className="home-badges">
              <li className="badge-blue">React 19</li>
              <li className="badge-blue">TypeScript strict</li>
              <li className="badge-blue">Vite</li>
            </ul>
          </div>
          <div className="home-group">
            <h3 className="home-h3">Qualité &amp; DevOps</h3>
            <ul className="home-badges">
              <li>RSpec</li>
              <li>Vitest / Testing Library</li>
              <li>Docker</li>
              <li>GitHub Actions</li>
              <li>Factur-X · PDF/A-3 · XML CII</li>
            </ul>
          </div>
        </section>

        {/* ÉTAT ACTUEL ET LIMITES */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">État actuel et limites</h2>
          <ul className="home-bullets" style={{ marginTop: 8 }}>
            <li>Socle de conformité Factur-X fonctionnel et gelé, validé par les outils officiels cités ci-dessus</li>
            <li>Parcours OWNER → sandbox → transmission simulée → suivi livré de bout en bout</li>
            <li>Prochaine étape annoncée par le dépôt : raccordement à une Plateforme Agréée réelle (choix fournisseur, contrat, accès sandbox), non réalisé à ce jour</li>
            <li>Aucune mise en production, aucune monétisation et aucune démonstration en ligne à ce stade</li>
          </ul>
        </section>

        {/* CONTACT / LIENS */}
        <section id="contact" className="home-card home-span-2">
          <h2 className="home-h2">Liens</h2>
          <ul className="home-contact">
            <li>
              <a
                className="home-chip home-chip-accent"
                href="https://github.com/Spiritzen/sereno-saas"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub – sereno-saas
              </a>
            </li>
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
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — Sereno</small>
      </footer>
    </div>
  );
}
