// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import "./Home.css";

export default function NotFound() {
  return (
    <div className="home-page theme-ink-marble home-fade-in">
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 16px",
        position: "relative",
        zIndex: 3,
      }}>
        <p style={{
          fontSize: "clamp(5rem, 18vw, 9rem)",
          fontWeight: 700,
          fontFamily: "var(--font-title)",
          color: "var(--accent)",
          lineHeight: 1,
          margin: 0,
          opacity: 0.85,
        }}>
          404
        </p>
        <h1 className="home-title" style={{ marginTop: 16 }}>Page introuvable</h1>
        <p className="home-subtitle">Cette page n'existe pas ou a été déplacée.</p>
        <Link className="home-cta" to="/" style={{ marginTop: 24 }}>
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
