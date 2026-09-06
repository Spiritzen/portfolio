// src/pages/Sereno.jsx
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Sereno.css";

// ─────────────────────────────────────────────────────────────────────────
// Carrousel — implémentation propre à cette page.
//
// Le composant partagé src/components/Carousel.jsx (grille de vignettes
// Swiper + autoplay + modale) ne convient pas tel quel ici : le cahier des
// charges demande une grande image dominante, une légende visible sans
// ouvrir la modale, un compteur explicite « n / 9 » et surtout aucun
// défilement automatique. L'adapter aurait risqué de changer le
// comportement d'InkRedPlumes et de SessionPlanning, qui le réutilisent
// tel quel — il est donc laissé intact et ce carrousel reste local à
// Sereno.
// ─────────────────────────────────────────────────────────────────────────
function SerenoCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  // ── Autoplay infini (3 s), avec pauses temporaires (survol, focus,
  // modale, onglet masqué) qui n'écrasent jamais la pause volontaire de
  // l'utilisateur (bouton Lecture/Pause = intention explicite). ──
  const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.(reducedMotionQuery).matches
  );
  const [playing, setPlaying] = useState(() => !reducedMotion);
  const [hovering, setHovering] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [tabVisible, setTabVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState !== "hidden"
  );

  useEffect(() => {
    const mq = window.matchMedia(reducedMotionQuery);
    const onChange = (e) => setReducedMotion(e.matches);
    setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const canAutoplay = playing && !modalOpen && !hovering && !focusWithin && tabVisible && !reducedMotion;

  // Un seul minuteur vivant à la fois : chaque changement d'index (manuel
  // ou automatique) ou de condition de pause nettoie l'ancien setTimeout
  // avant d'en programmer un nouveau à 3000 ms pile — pas de cumul,
  // pas d'accélération, et le délai repart proprement après toute
  // interaction manuelle.
  useEffect(() => {
    if (!canAutoplay) return undefined;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(id);
  }, [canAutoplay, index, slides.length]);

  const togglePlaying = useCallback(() => {
    setPlaying((p) => !p);
  }, []);

  const openModal = useCallback((e) => {
    lastFocusedRef.current = e?.currentTarget ?? null;
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = "";
    lastFocusedRef.current?.focus?.();
    // Le pointeur a forcément quitté la zone du carrousel pour interagir
    // avec la modale (portail React monté hors de son arbre DOM réel) : on
    // efface l'état "survol" hérité pour éviter qu'il ne reste bloqué à
    // true si le navigateur n'a pas pu recalculer un mouseleave propre sur
    // un élément de la modale déjà démonté.
    setHovering(false);
  }, []);

  // Raccourcis clavier de la modale (Échap + flèches)
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen, closeModal, goPrev, goNext]);

  useEffect(() => {
    if (modalOpen) setTimeout(() => closeBtnRef.current?.focus(), 0);
  }, [modalOpen]);

  // Navigation clavier hors modale : les flèches fonctionnent dès que le
  // focus se trouve n'importe où dans le carrousel (bouton, point).
  const onStageKeyDown = (e) => {
    if (modalOpen) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
  };

  const slide = slides[index];

  const modal = !modalOpen ? null : createPortal(
    <div
      className="srn-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="srn-modal-title"
      onClick={closeModal}
    >
      <div className="srn-modal-content" onClick={(e) => e.stopPropagation()} role="document">
        <img
          className="srn-modal-img"
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
        />
        <h3 id="srn-modal-title" className="home-h3 srn-modal-title">{slide.title}</h3>
        <p className="srn-modal-caption">{slide.caption}</p>

        <div className="srn-modal-actions">
          <button type="button" className="home-chip" onClick={goPrev} aria-label="Image précédente">‹‹</button>
          <span className="srn-carousel-count" aria-hidden="true">{index + 1} / {slides.length}</span>
          <button ref={closeBtnRef} type="button" className="home-chip" onClick={closeModal}>Fermer</button>
          <button type="button" className="home-chip" onClick={goNext} aria-label="Image suivante">››</button>
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <div
      className="srn-carousel"
      onKeyDown={onStageKeyDown}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={(e) => {
        // Ne met en pause que sur un vrai focus clavier (navigation Tab) :
        // un clic souris ou un focus() programmatique (ex. restitué à la
        // fermeture de la modale) ne doit pas geler l'autoplay pour le
        // reste de la visite.
        if (e.target.matches?.(":focus-visible")) setFocusWithin(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocusWithin(false);
      }}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Captures du produit Sereno"
    >
      <div className="srn-carousel-stage">
        <button type="button" className="srn-carousel-nav" onClick={goPrev} aria-label="Capture précédente">‹</button>

        <div
          className="srn-carousel-frame"
          role="group"
          aria-roledescription="diapositive"
          aria-label={`${index + 1} sur ${slides.length}`}
        >
          <button
            type="button"
            className="srn-carousel-btn-img"
            onClick={openModal}
            aria-haspopup="dialog"
            aria-label={`Agrandir : ${slide.title}`}
          >
            <img
              className="srn-carousel-img"
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              decoding="async"
            />
          </button>
        </div>

        <button type="button" className="srn-carousel-nav" onClick={goNext} aria-label="Capture suivante">›</button>
      </div>

      <div className="srn-carousel-meta">
        <div className="srn-carousel-titlecount">
          <h3 className="srn-carousel-title">{slide.title}</h3>
          <span className="srn-carousel-controls">
            <span className="srn-carousel-count" aria-hidden="true">{index + 1} / {slides.length}</span>
            <button
              type="button"
              className="srn-carousel-playpause"
              onClick={togglePlaying}
              aria-label={playing ? "Mettre le carrousel en pause" : "Relancer le carrousel"}
            >
              <span aria-hidden="true">{playing ? "⏸" : "▶"}</span>
            </button>
          </span>
        </div>
        <p className="srn-carousel-caption">{slide.caption}</p>
        <button type="button" className="srn-carousel-expand" onClick={openModal}>
          🔍&nbsp;Agrandir la capture
        </button>
      </div>

      <div className="srn-carousel-dots" role="tablist" aria-label="Aller à une capture">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Capture ${i + 1} sur ${slides.length} : ${s.title}`}
            className={`srn-dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {modal}
    </div>
  );
}

export default function Sereno() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const base = import.meta.env.BASE_URL;
  const img = (name) => `${base}images/sereno/${name}`;

  const slides = [
    {
      src: img("sereno-01-dashboard.jpg"),
      width: 1920, height: 954,
      title: "Tableau de bord",
      caption: "Un cockpit clair pour suivre l'activité, les échéances et la conformité.",
      alt: "Tableau de bord Sereno affichant l'encaissement constaté, les montants en attente et en retard, la complétude des documents, ainsi que les factures récentes et les échéances à venir.",
    },
    {
      src: img("sereno-02-facture.jpg"),
      width: 1920, height: 952,
      title: "Création d'une facture",
      caption: "Création guidée avec calcul serveur des montants et de la TVA.",
      alt: "Formulaire de création d'une facture avec lignes de prestation et calcul automatique de la TVA et des totaux.",
    },
    {
      src: img("sereno-03-conformite.jpg"),
      width: 1920, height: 956,
      title: "Contrôle avant émission",
      caption: "Les erreurs bloquantes sont détectées avant toute émission irréversible.",
      alt: "Écran de contrôle avant émission affichant les totaux HT/TVA/TTC et le message « Facture conforme — aucune erreur bloquante détectée ».",
    },
    {
      src: img("sereno-04-cycle-vie.jpg"),
      width: 1920, height: 953,
      title: "Cycle de vie et historique",
      caption: "Chaque changement d'état reste visible dans un historique métier distinct.",
      alt: "Détail d'une facture émise avec accès aux fichiers PDF et XML, et frise du cycle de vie du brouillon jusqu'au paiement reçu.",
    },
    {
      src: img("sereno-05-avoir.jpg"),
      width: 1903, height: 959,
      title: "Correction par avoir",
      caption: "Une facture émise reste immuable : sa correction passe par un avoir conforme.",
      alt: "Écran de création d'un avoir avec lignes créditées, TVA créditée et contrôle du montant restant créditable.",
    },
    {
      src: img("sereno-06-transmission.jpg"),
      width: 1920, height: 950,
      title: "Supervision de la transmission",
      caption: "Transmission simulée, readiness explicite et suivi des statuts entrants.",
      alt: "Supervision de la transmission d'une facture : dépôt simulé vers un fournisseur sandbox, identifiant externe et historique des avoirs liés.",
    },
    {
      src: img("sereno-07-parametres.jpg"),
      width: 1920, height: 953,
      title: "Paramètres de l'organisation",
      caption: "Identité fiscale, TVA, règlement et activation contrôlée du sandbox.",
      alt: "Paramètres de l'organisation : identité de l'entreprise, régime de TVA, numéro de TVA intracommunautaire et coordonnées.",
    },
    {
      src: img("sereno-08-portail.jpg"),
      width: 1920, height: 954,
      title: "Portail destinataire",
      caption: "Un accès séparé, sécurisé et en lecture seule pour le destinataire.",
      alt: "Portail destinataire en lecture seule affichant le détail d'une facture reçue et le téléchargement de son PDF.",
    },
    {
      src: img("sereno-09-facture.jpg"),
      width: 1920, height: 957,
      title: "Document généré",
      caption: "Le parcours aboutit à une facture lisible, générée par Sereno et contrôlable avant transmission.",
      alt: "Facture Factur-X ouverte dans un lecteur PDF, avec bandeau de conformité PDF/A et pièce jointe XML de la facture électronique.",
    },
  ];

  return (
    <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>

      {/* ══ HERO ══ */}
      <header className="home-hero">
        <div className="home-hero-row">
          <Link to="/" className="home-avatar-link" aria-label="Retour à l'accueil">
            <img
              className="srn-avatar-emblem"
              src={img("sereno-embleme.svg")}
              alt=""
              width="120"
              height="120"
            />
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">Sereno</h1>
            <span className="home-tag">MVP SaaS — socle Factur-X validé</span>
            <p className="home-subtitle">
              La facturation électronique guidée pour les indépendants et TPE françaises.
            </p>
          </div>

          <Link className="home-cta" to="/">← Portfolio</Link>
        </div>
      </header>

      <main className="home-main">

        {/* ══ HERO / PREUVE IMMÉDIATE ══ */}
        <section className="home-card home-span-2">
          <p style={{ color: "#ccd0d8", lineHeight: 1.7 }}>
            Sereno accompagne la création, le contrôle et le suivi des factures
            électroniques sans exposer l'utilisateur à toute la complexité
            réglementaire. Le projet traduit les règles Factur-X, le cycle de
            vie des factures et les corrections par avoir en comportements
            métier explicites.
          </p>

          <span className="status-pill status-dev" style={{ marginTop: 12 }}>
            🛠️ Développement avancé · transmission sandbox
          </span>

          <div className="srn-intro-tags" aria-label="Technologies clés">
            <span className="srn-tag">Factur-X</span>
            <span className="srn-tag">Rails API</span>
            <span className="srn-tag">React</span>
            <span className="srn-tag">PostgreSQL</span>
            <span className="srn-tag">RSpec</span>
          </div>

          <SerenoCarousel slides={slides} />

          <a
            className="home-chip home-chip-accent srn-github-cta"
            href="https://github.com/Spiritzen/sereno-saas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub – sereno-saas
          </a>
        </section>

        {/* ══ TROIS PREUVES FORTES ══ */}
        <div className="srn-proofs-grid home-span-2">
          <article className="srn-proof-card">
            <h3 className="home-h3">Conformité structurée</h3>
            <p>Factur-X, contrôles métier et détection des erreurs bloquantes avant émission.</p>
          </article>
          <article className="srn-proof-card">
            <h3 className="home-h3">Logique métier réelle</h3>
            <p>Immutabilité des factures émises, corrections par avoir, transitions d'état et historique.</p>
          </article>
          <article className="srn-proof-card">
            <h3 className="home-h3">Architecture maîtrisée</h3>
            <p>Rails API, React TypeScript, PostgreSQL, isolation multi-tenant et couverture RSpec.</p>
          </article>
        </div>

        {/* ══ PARCOURS D'UNE FACTURE ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Parcours d'une facture</h2>
          <div className="srn-journey-flow">
            <div className="srn-journey-step">
              <span className="srn-journey-num" aria-hidden="true">1</span>
              <h3>Créer</h3>
              <p>Un brouillon prend forme, ligne par ligne, avec calcul serveur des totaux et de la TVA.</p>
            </div>
            <span className="srn-journey-arrow" aria-hidden="true">→</span>
            <div className="srn-journey-step">
              <span className="srn-journey-num" aria-hidden="true">2</span>
              <h3>Contrôler</h3>
              <p>Le moteur de conformité bloque l'émission tant qu'une erreur reste détectée.</p>
            </div>
            <span className="srn-journey-arrow" aria-hidden="true">→</span>
            <div className="srn-journey-step">
              <span className="srn-journey-num" aria-hidden="true">3</span>
              <h3>Émettre</h3>
              <p>La facture devient immuable : numéro attribué, PDF/A-3 et XML générés.</p>
            </div>
            <span className="srn-journey-arrow" aria-hidden="true">→</span>
            <div className="srn-journey-step">
              <span className="srn-journey-num" aria-hidden="true">4</span>
              <h3>Suivre</h3>
              <p>Transmission sandbox, statuts entrants et solde de paiement suivis dans le temps.</p>
            </div>
            <span className="srn-journey-arrow" aria-hidden="true">→</span>
            <div className="srn-journey-step">
              <span className="srn-journey-num" aria-hidden="true">5</span>
              <h3>Corriger par avoir</h3>
              <p>Une erreur après émission se corrige par un avoir conforme, jamais par une modification silencieuse.</p>
            </div>
          </div>
        </section>

        {/* ══ LE VRAI DÉFI MÉTIER ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Le vrai défi métier</h2>
          <p style={{ color: "#ccd0d8", lineHeight: 1.7 }}>
            Le défi n'était pas de dessiner une facture. Il fallait traduire des
            règles fiscales et documentaires en comportements logiciels
            fiables : calculs serveur, contrôles avant émission, immutabilité,
            avoirs et suivi du cycle de vie.
          </p>
          <ul className="home-bullets srn-challenge-list">
            <li>Chaque événement métier sensible (facture, avoir) est journalisé de façon append-only : une correction se traduit par un nouvel événement, jamais par une réécriture silencieuse de l'historique.</li>
            <li>La numérotation des factures est séquentielle et verrouillée à l'émission — jamais un simple compteur non protégé côté application.</li>
            <li>Le webhook entrant de la Plateforme Agréée est vérifié par signature HMAC sur le corps brut, avant toute autre lecture.</li>
          </ul>
        </section>

        {/* ══ SOUS LE CAPOT ══ */}
        <details className="srn-details home-card home-span-2" open>
          <summary className="srn-details-summary">Sous le capot</summary>

          <div className="srn-details-block">
            <h3 className="home-h3">Architecture Rails API / React TypeScript</h3>
            <p style={{ color: "#ccd0d8", lineHeight: 1.6 }}>
              Backend Rails 8 en mode API, frontend React 19 en TypeScript
              strict, échanges via une API JSON versionnée
              (<code>/api/v1</code>). Quatre surfaces restent séparées : l'API
              de gestion, l'espace destinataire, le portail public tokenisé et
              le webhook entrant de la Plateforme Agréée.
            </p>
          </div>

          <div className="srn-details-block">
            <h3 className="home-h3">PostgreSQL et isolation multi-tenant</h3>
            <p style={{ color: "#ccd0d8", lineHeight: 1.6 }}>
              PostgreSQL comme base de données. Chaque requête métier est
              résolue via <code>Current.organisation</code>, dérivé du JWT —
              jamais depuis un <code>organisation_id</code> transmis par le
              frontend.
            </p>
          </div>

          <div className="srn-details-block">
            <h3 className="home-h3">Authentification et autorisations</h3>
            <p style={{ color: "#ccd0d8", lineHeight: 1.6 }}>
              Sessions JWT en cookies HttpOnly, jeton de rafraîchissement
              dédié, mots de passe BCrypt, autorisation par rôle via Pundit
              (<code>super_admin</code>, <code>owner</code>,{" "}
              <code>comptable</code>, <code>membre</code>). L'espace
              destinataire utilise une pile d'authentification distincte,
              avec ses propres cookies et sa propre clé de signature.
            </p>
          </div>

          <div className="srn-details-block">
            <h3 className="home-h3">Génération PDF/XML Factur-X</h3>
            <p style={{ color: "#ccd0d8", lineHeight: 1.6 }}>
              Génération d'un PDF/A-3 lisible embarquant un XML CII structuré,
              assemblés en un document Factur-X unique dès l'émission.
            </p>
          </div>

          <div className="srn-details-block">
            <h3 className="home-h3">Validations métier</h3>
            <p style={{ color: "#ccd0d8", lineHeight: 1.6 }}>
              Totaux, numérotation et contrôles de conformité pré-émission
              sont calculés et appliqués côté serveur : un bouton désactivé
              côté frontend n'est jamais la seule protection.
            </p>
          </div>

          <div className="srn-details-block">
            <h3 className="home-h3">Tests et conformité</h3>
            <p style={{ color: "#ccd0d8", lineHeight: 1.6 }}>
              Suite de tests RSpec côté backend et Vitest/Testing Library côté
              frontend, intégrée à une CI à cinq jobs (sécurité statique,
              lint, tests backend, tests et build frontend, gate de
              conformité). Les niveaux XSD Factur-X, Schematron EN 16931 et
              PDF/A-3b sont rejoués automatiquement en CI sur chaque facture
              et chaque avoir ; la couche France CTC n'est pas automatisée
              dans cette CI. Le socle légal est gelé sous le tag{" "}
              <code>v0.3.0-conformite-fr</code>.
            </p>
          </div>

          <div className="srn-stack-band">
            <h3 className="home-h3">Stack technique</h3>
            <div className="home-group">
              <h3 className="home-h3">Backend</h3>
              <ul className="home-badges">
                <li className="badge-teal">Ruby on Rails 8.1 (API)</li>
                <li className="badge-teal">Ruby 3.3+</li>
                <li>PostgreSQL</li>
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
          </div>
        </details>

        {/* ══ ÉTAT RÉEL DU PRODUIT ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">État réel du produit</h2>
          <div className="srn-state-grid">
            <div className="srn-state-col srn-state-done">
              <h3 className="home-h3">✅ Validé aujourd'hui</h3>
              <ul className="home-bullets">
                <li>Génération du socle Factur-X</li>
                <li>Workflow facture et avoir</li>
                <li>Contrôles avant émission</li>
                <li>Transmission sandbox</li>
                <li>Portail destinataire</li>
                <li>Socle testé</li>
              </ul>
            </div>
            <div className="srn-state-col srn-state-next">
              <h3 className="home-h3">🔜 Avant une exploitation commerciale</h3>
              <ul className="home-bullets">
                <li>Contractualisation avec une Plateforme Agréée réelle</li>
                <li>Raccordement à son API et identifiants de production</li>
                <li>Stratégie d'archivage réglementaire</li>
                <li>Finalisation de la monétisation et de l'exploitation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ══ LIENS ══ */}
        <section id="contact" className="home-card home-span-2 home-section-links">
          <h2 className="home-h2">Liens</h2>
          <ul className="home-contact">
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
              <a
                className="home-chip"
                href="https://github.com/Spiritzen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon-cat" src={`${base}images/chat.svg`} alt="" aria-hidden="true" />
                GitHub
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
