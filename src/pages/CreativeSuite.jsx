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
      {/* ══ HEADER — identique à Home ══ */}
      <header className="home-hero">
        <div className="home-hero-row">
          <img
            className="home-avatar"
            src={`${base}images/avatar.jpg`}
            alt="Sébastien Cantrelle"
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

          {/* CTA → retour portfolio */}
          <Link className="home-cta" to="/">
            ← Portfolio
          </Link>
        </div>
      </header>

      {/* ══ MAIN ══ */}
      <main className="cs-main">

        {/* Titre de section */}
        <div className="cs-intro home-span-2">
          <h2 className="cs-section-title">
            <span className="cs-title-star" aria-hidden="true">✦</span>
            Creative Suite
          </h2>
          <p className="cs-section-sub">
            Trois outils open source 100&nbsp;% navigateur — zéro serveur, zéro
            installation. Chacun autonome, ensemble une suite de création complète.
          </p>
          <div className="cs-suite-chips">
            <span className="cs-suite-chip cs-chip-purple">🎛️ Audio</span>
            <span className="cs-suite-chip cs-chip-teal">⚡ Design</span>
            <span className="cs-suite-chip cs-chip-amber">🎬 Animation</span>
          </div>
        </div>

        {/* Cards */}
        {projects.map((p) => (
          <article
            key={p.id}
            className="cs-card home-span-2"
            style={{ "--cs-accent": p.accent }}
          >
            <div className="cs-card-img-wrap">
              <img
                className="cs-card-img"
                src={`${base}images/${p.image}`}
                alt={`Aperçu ${p.name}`}
                loading="lazy"
              />
              <div className="cs-card-img-overlay" />
            </div>

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
                  className="cs-cta-demo"
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  🚀 Tester la démo live
                </a>
                <a
                  className="cs-cta-gh"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* ══ À PROPOS ══ */}
        <section className="home-card home-span-2">
          <h2 className="home-h2">À propos</h2>

          <p style={{ marginTop: 8, color: "#ccd0d8ff" }}>
            Développeur full-stack{" "}
            <strong>(React • Spring Boot • .NET Razor Pages)</strong> et artiste
            2D/3D <strong>(Blender • Photoshop)</strong>. Titulaire du{" "}
            <strong>titre CDA (RNCP niveau 6)</strong>. La Creative Suite est
            mon terrain d'exploration front-end avancé — TypeScript strict,
            Web Audio API, Canvas, moteurs d'animation.
          </p>

          <div className="home-group">
            <h3 className="home-h3">Stack Creative Suite</h3>
            <ul className="home-badges">
              <li>React 18</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>Tone.js</li>
              <li>Fabric.js</li>
              <li>GSAP</li>
              <li>Web Audio API</li>
              <li>CSS Modules</li>
              <li>GitHub Pages</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
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
