// src/pages/VitrinesLocales.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./VitrinesLocales.css";

const projects = [
  {
    id: "belkhir-depannage",
    name: "Belkhir Dépannage",
    status: "Projet client en validation",
    statusClass: "status-client",
    objectif:
      "Transformer un besoin de dépannage urgent en parcours de conversion clair : identifier l'intervention, rassurer, vérifier la zone couverte et appeler immédiatement depuis un mobile.",
    particularite:
      "Vitrine Astro multi-pages avec cinq pages métiers, navigation mobile accessible, barre d'appel permanente, modale de devis et fondations SEO local. La démonstration reste non indexée jusqu'à la validation et au branchement de l'envoi du formulaire.",
    stack: ["Astro 7", "TypeScript strict", "CSS natif", "astro:assets", "Vitest", "GitHub Pages"],
    github: "https://github.com/Spiritzen/belkhir-depannage",
    demo: "https://spiritzen.github.io/belkhir-depannage/",
    image: "vitrines-locales/hero-belkhir-depannage-desktop-bd.jpg",
    imageAlt: "Technicien Belkhir Dépannage arrivant pour une intervention d'urgence",
    imageWidth: 1902,
    imageHeight: 954,
    imageLinkable: true,
    // ℹ️ Cadrage horizontal local : le sujet (technicien + mallette) est situé
    // sur la partie droite du visuel — object-position décalé pour éviter
    // qu'un recadrage centré ne le rogne (cf. ratio 16/9 imposé par la carte).
    imagePosition: "70% top",
    accent: "#EA580C",
  },
  {
    id: "nolya",
    name: "Nolya",
    status: "Maquette non officielle",
    statusClass: "status-mockup",
    objectif:
      "Transformer la présence d'un café réel d'Amiens, aujourd'hui portée par les réseaux sociaux, en une expérience web claire et chaleureuse : découvrir le lieu, consulter la carte, lire les avis, vérifier les horaires et préparer son itinéraire.",
    particularite:
      "Carte reconstruite à la main (7 catégories, navigation clavier complète, rail tactile sur mobile) plutôt qu'une image figée, et avis Google réels plutôt que des témoignages inventés.",
    stack: ["React 19", "TypeScript strict", "Vite", "CSS Modules", "Motion", "Vitest"],
    github: "https://github.com/Spiritzen/nolya",
    demo: "https://spiritzen.github.io/nolya/",
    image: "vitrines-locales/nolya.jpg",
    imageAlt: "Aperçu de la maquette web Nolya",
    imageWidth: 1900,
    imageHeight: 958,
    imageLinkable: true,
    accent: "#DF9966",
  },
  {
    id: "beauty-lai",
    name: "Beauty Laï",
    status: "Maquette commerciale non officielle",
    statusClass: "status-mockup",
    objectif:
      "Donner envie avant de réserver, en complément de la page Planity d'un institut de beauté réel d'Amiens : présenter l'univers, les espaces, les familles de soins et les tarifs, puis rediriger vers la réservation officielle.",
    particularite:
      "Carte de prestations de 12 catégories et 67 entrées tarifaires en éléments HTML natifs, SEO local honnête avec JSON-LD BeautySalon, sans donnée commerciale inventée.",
    stack: ["Astro 7", "TypeScript strict", "React (îlot menu mobile)", "Vitest", "Astro Check"],
    github: "https://github.com/Spiritzen/beauty-lai",
    demo: "https://spiritzen.github.io/beauty-lai/",
    image: "vitrines-locales/beauty-lai.jpg",
    imageAlt: "Aperçu de la maquette web Beauty Laï",
    imageWidth: 1902,
    imageHeight: 953,
    imageLinkable: true,
    accent: "#B9965B",
  },
  {
    id: "la-vraie-baguette",
    name: "La Vraie Baguette",
    status: "Démonstrateur fictif",
    statusClass: "status-mockup",
    objectif:
      "Démontrer la capacité à créer rapidement une présence web haut de gamme pour un artisan ou un commerce local, à partir d'une intention (artisanat, chaleur, élégance) plutôt que d'un template générique.",
    particularite:
      "Formulaire de demande de gâteau sur mesure qui prépare un e-mail structuré via mailto — sans backend, et sans jamais prétendre qu'une commande a été transmise.",
    stack: ["React 19", "Vite", "JavaScript", "Tailwind CSS 4", "Vitest"],
    github: "https://github.com/Spiritzen/la_vrai_baguette",
    demo: "https://spiritzen.github.io/la_vrai_baguette/",
    image: "vitrines-locales/la-vraie-baguette-desktop.jpg",
    imageAlt: "Aperçu de la maquette web La Vraie Baguette",
    imageWidth: 1100,
    imageHeight: 773,
    // ℹ️ Capture volontairement non cliquable dans ce sprint (hors périmètre
    // "Nolya / Beauty Laï" — cf. PROMPT_..._VITRINES_LOCALES_IMAGES_LIENS_SVG.txt §3-4).
    imageLinkable: false,
    accent: "#C7A15A",
  },
];

export default function VitrinesLocales() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const base = import.meta.env.BASE_URL;

  return (
    <div className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}>

      <header className="home-hero">
        <div className="home-hero-row">
          <Link to="/" className="home-avatar-link" aria-label="Retour à l'accueil">
            <img
              className="home-avatar-emblem"
              src={`${base}images/vitrines-locales/vitrines-locales-embleme.svg`}
              alt=""
              width="120"
              height="120"
            />
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">Vitrines locales</h1>
            <span className="home-tag">Transformer une activité réelle en expérience web</span>
            <p className="home-subtitle">
              Quatre vitrines conçues pour transformer des besoins locaux et
              régionaux en expériences web claires, rapides et adaptées à
              chaque métier.
            </p>
          </div>

          <Link className="home-cta" to="/">← Portfolio</Link>
        </div>
      </header>

      <main className="home-main">

        <section className="home-card home-span-2">
          <h2 className="home-h2">Quatre projets, quatre réponses métiers</h2>
          <p style={{ marginTop: 8, color: "#ccd0d8", lineHeight: 1.7 }}>
            Cette sélection réunit trois démonstrateurs de prospection et un
            projet client en validation. Chaque réalisation indique clairement
            son statut : aucune maquette n'est présentée comme un site officiel
            lorsqu'elle ne l'est pas.
          </p>
        </section>

        <section className="home-card home-span-2">
          <div className="vl-grid">
            {projects.map((p) => (
              <article key={p.id} className="vl-card" style={{ "--vl-accent": p.accent }}>
                <span className={`status-pill ${p.statusClass}`}>{p.status}</span>
                <h3 className="vl-card-title" style={{ marginTop: 10 }}>{p.name}</h3>

                {p.image && (
                  p.imageLinkable && p.demo ? (
                    <a
                      className="vl-card-img-link"
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ouvrir la maquette ${p.name} dans un nouvel onglet`}
                    >
                      <img
                        className="vl-card-img"
                        src={`${base}images/${p.image}`}
                        alt={p.imageAlt}
                        width={p.imageWidth}
                        height={p.imageHeight}
                        loading="lazy"
                        style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                      />
                    </a>
                  ) : (
                    <img
                      className="vl-card-img"
                      src={`${base}images/${p.image}`}
                      alt={p.imageAlt}
                      width={p.imageWidth}
                      height={p.imageHeight}
                      loading="lazy"
                      style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                    />
                  )
                )}

                {/* ✅ "Voir la maquette" seul, juste sous la capture,
                    avant "Objectif :" (correctif hiérarchie des cartes) */}
                {p.demo && (
                  <div className="vl-card-ctas">
                    <a
                      className="home-chip"
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🌐&nbsp;Voir la maquette
                    </a>
                  </div>
                )}

                <p className="vl-card-desc"><strong>Objectif :</strong> {p.objectif}</p>
                <p className="vl-card-desc"><strong>Particularité :</strong> {p.particularite}</p>

                <ul className="home-badges" style={{ marginTop: 8 }}>
                  {p.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>

                {/* ✅ GitHub redescendu tout en bas de la carte, après les
                    technologies (position initiale — correctif ciblé) */}
                <div className="vl-card-ctas">
                  <a
                    className="home-chip home-chip-accent"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub – {p.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

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
        <small>© {new Date().getFullYear()} Sébastien Cantrelle — Vitrines locales</small>
      </footer>
    </div>
  );
}
