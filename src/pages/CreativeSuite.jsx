// src/pages/CreativeSuite.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CreativeSuite.css";

const projects = [
  {
    id: "beatstudio",
    name: "BeatStudio",
    emoji: "🎛️",
    tagline: "Step sequencer professionnel",
    description:
      "Compose, expérimente et exporte des patterns rythmiques directement dans le navigateur. 29 instruments synthétiques, effets par piste, export WAV réel — zéro installation.",
    demo: "https://spiritzen.github.io/BeatStudio/",
    github: "https://github.com/Spiritzen/BeatStudio",
    image: "beatstudiopiano.jpg",
    imageWidth: 1871,
    imageHeight: 999,
    badge: "React · TypeScript · Tone.js",
    badgeClass: "cs-badge-purple",
    features: [
      "29 instruments synthétiques (Percussions · Mélodique · FX)",
      "Effets par piste — Reverb · Delay · Distortion · Filter",
      "Export WAV réel via MediaRecorder + Export JSON",
      "Piano virtuel 4 octaves, assignation de notes par step",
      "Follow Playhead style DAW — Ableton / FL Studio",
    ],
    accent: "#a78bfa",
  },
  {
    id: "easystudio",
    name: "EasyStudio",
    emoji: "⚡",
    tagline: "Éditeur visuel open source",
    description:
      "Crée logos, vignettes et boutons animés. Export SVG, PNG, HTML/CSS et CSS @keyframes. Un Figma light qui parle le langage des développeurs — export de vrai code, zéro abonnement.",
    demo: "https://spiritzen.github.io/EasyStudio/",
    github: "https://github.com/Spiritzen/EasyStudio",
    image: "easystudio.jpg",
    imageWidth: 1875,
    imageHeight: 998,
    badge: "React · TypeScript · Fabric.js",
    badgeClass: "cs-badge-teal",
    features: [
      "Canvas vectoriel Fabric.js — formes, texte, images",
      "8 formats prédéfinis (YouTube, Instagram, LinkedIn…)",
      "Transitions GSAP 8 types + export CSS @keyframes",
      "Drag & drop calques style Figma avec groupes",
      "Module IA Claude API — génération SVG par prompt",
    ],
    accent: "#34d399",
  },
  {
    id: "motionstudio",
    name: "MotionStudio",
    emoji: "🎬",
    tagline: "Éditeur d'animation web pro",
    description:
      "Timeline professionnelle avec keyframes, multi-pistes vidéo/audio, outil ciseaux. Inspiré de Premiere Pro et After Effects — 100% front-end, zéro serveur.",
    demo: "https://spiritzen.github.io/MotionStudio/",
    github: "https://github.com/Spiritzen/MotionStudio",
    image: "MotionStudioPreview.jpg",
    imageWidth: 1879,
    imageHeight: 1003,
    badge: "React · TypeScript · GSAP",
    badgeClass: "cs-badge-amber",
    features: [
      "Timeline keyframes drag & drop, clips redimensionnables",
      "Multi-pistes vidéo MP4/WebM avec son synchronisé",
      "Audio Web Audio API — MP3/WAV zéro grésillements",
      "Outil ciseaux ✂️ sur tous types de clips",
      "Undo/Redo 50 états — Ctrl+Z / Ctrl+Y",
    ],
    accent: "#fbbf24",
  },
];

export default function CreativeSuite() {
  const [loaded, setLoaded] = useState(false);
  const base = import.meta.env.BASE_URL;

  useEffect(() => setLoaded(true), []);

  return (
    <div
      id="top"
      className={`home-page theme-ink-marble ${loaded ? "home-fade-in" : ""}`}
    >
      {/* ══ HERO — même famille que Vitrines locales (emblème dédié,
          pas le bloc d'identité "Sébastien Cantrelle / Open to work") ══ */}
      <header className="home-hero">
        <div className="home-hero-row">
          <Link to="/" className="home-avatar-link" aria-label="Retour à l'accueil">
            <img
              className="cs-avatar-emblem"
              src={`${base}images/creative-suite/creative-suite-embleme.svg`}
              alt=""
              width="120"
              height="120"
            />
          </Link>

          <div className="home-hero-info">
            <h1 className="home-title">Creative Suite</h1>
            <span className="home-tag">Audio · Design · Animation</span>
            <p className="home-subtitle">
              Trois outils créatifs open source, directement dans le navigateur.
            </p>
          </div>

          <Link className="home-cta" to="/">
            ← Portfolio
          </Link>
        </div>
      </header>

      {/* ══ MAIN ══ */}
      <main className="cs-main">

        {/* ══ PANNEAU INTRODUCTIF — langage visuel de Vitrines locales ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">Trois outils, un même atelier créatif</h2>
          <p style={{ marginTop: 8, color: "#ccd0d8", lineHeight: 1.7 }}>
            Creative Suite rassemble trois applications autonomes pensées pour
            expérimenter la création directement dans le navigateur : composer
            avec BeatStudio, produire des visuels avec EasyStudio et construire
            des animations avec MotionStudio. Chaque outil possède son propre
            univers, tout en partageant une même exigence de fluidité, de
            contrôle et d'accessibilité — open source, sans serveur, sans
            installation.
          </p>
        </section>

        {/* ══ TROIS LOGICIELS — lignes horizontales empilées (desktop) ══ */}
        {projects.map((p) => (
          <article
            key={p.id}
            className="cs-card home-span-2"
            style={{ "--cs-accent": p.accent }}
          >
            {/* Zone média : capture puis démo, immédiatement dessous */}
            <div className="cs-card-media">
              <div className="cs-card-img-wrap">
                <img
                  className="cs-card-img"
                  src={`${base}images/${p.image}`}
                  alt={`Aperçu de l'interface ${p.name}`}
                  width={p.imageWidth}
                  height={p.imageHeight}
                  loading="lazy"
                />
                <div className="cs-card-img-overlay" />
              </div>

              {p.demo && (
                <a
                  className="cs-cta-demo"
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Tester la démo live de ${p.name}`}
                >
                  🚀 Tester la démo live
                </a>
              )}
            </div>

            {/* Zone informations : nom → badge → description → features → GitHub */}
            <div className="cs-card-body">
              <div className="cs-card-head">
                <span className="cs-card-emoji" aria-hidden="true">{p.emoji}</span>
                <div>
                  <h3 className="cs-card-name">{p.name}</h3>
                  <p className="cs-card-tagline">{p.tagline}</p>
                </div>
                <span className={`cs-badge ${p.badgeClass}`}>{p.badge}</span>
              </div>

              <p className="cs-card-desc">{p.description}</p>

              <ul className="cs-features">
                {p.features.map((f) => (
                  <li key={f} className="cs-feature-item">
                    <span className="cs-feature-dot" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="cs-ctas">
                <a
                  className="cs-cta-gh"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub – ${p.name}`}
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* ══ LIENS — panneau unique, remplace À propos + Contact ══ */}
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
                href="https://github.com/Spiritzen"
                target="_blank"
                rel="noopener noreferrer"
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

      {/* ══ FOOTER ══ */}
      <footer className="home-footer">
        <small>
          © {new Date().getFullYear()} Sébastien Cantrelle —{" "}
          <Link to="/" style={{ color: "var(--fg)" }}>
            Portfolio
          </Link>{" "}
          · Creative Suite · MIT License
        </small>
      </footer>
    </div>
  );
}
