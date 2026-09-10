import { Suspense, lazy, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NeuralBackground from "./components/NeuralBackground.jsx";

// ✅ Chargement différé des pages projets : l'accueil (Home) reste chargé
// normalement, les 8 autres pages ne sont téléchargées qu'au moment où
// elles sont réellement visitées (sprint transformation visuelle).
const InkRedPlumes = lazy(() => import("./pages/InkRedPlumes.jsx"));
const SessionPlanning = lazy(() => import("./pages/SessionPlanning.jsx"));
const CreativeSuite = lazy(() => import("./pages/CreativeSuite.jsx"));
const AgencyOS = lazy(() => import("./pages/AgencyOS.jsx"));
const Sereno = lazy(() => import("./pages/Sereno.jsx"));
const TrajetFormateur = lazy(() => import("./pages/TrajetFormateur.jsx"));
const Velocean = lazy(() => import("./pages/Velocean.jsx"));
const VitrinesLocales = lazy(() => import("./pages/VitrinesLocales.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

// ℹ️ CC Location, EcoList, Dev-Game Unity et Artist 2D/3D ont été retirées
// de la grille d'accueil et de ces routes publiques (sprint catalogue
// GitHub). Leurs fichiers sources (src/pages/CcLocation.jsx, EcoList.jsx,
// DevGameUnity.jsx, Artist2D3D.jsx) ne sont PAS supprimés : la suppression
// physique sera décidée plus tard.

// ✅ Fallback très léger le temps du chargement d'une page projet — texte
// discret sur fond transparent (le fond sombre global reste visible
// derrière), sans dépendance ni animation.
function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#a8b0c0",
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        fontSize: "0.95rem",
      }}
    >
      Chargement…
    </div>
  );
}

// ✅ Gestionnaire global de défilement (micro-sprint finition).
// Corrige le comportement par défaut de React Router : sans lui, la
// position de scroll de la page précédente reste appliquée après une
// navigation, faisant apparaître la nouvelle page au milieu de son
// contenu. Monté une seule fois, à l'intérieur du Router et avant les
// Routes — ne rend rien.
//
// Règle appliquée : destination SANS hash → haut de page immédiat, sans
// animation. Destination AVEC hash → ce gestionnaire ne touche à rien et
// laisse le mécanisme d'ancre déjà présent dans Home.jsx (useEffect sur
// location.hash + scrollIntoView) traiter #projets/#contact — jamais les
// deux en même temps, pour éviter un double saut visible.
function ScrollManager() {
  const location = useLocation();
  const prevScrollRestoration = useRef(null);

  // Rend Précédent/Suivant déterministes : en laissant le navigateur
  // restaurer lui-même le scroll (comportement par défaut "auto"), une
  // restauration tardive peut renvoyer une page au milieu de son
  // contenu après notre propre correction. On reprend donc la main, et
  // on restaure la valeur précédente au démontage (fin de vie de l'app).
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;
    prevScrollRestoration.current = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prevScrollRestoration.current;
    };
  }, []);

  useEffect(() => {
    if (location.hash) return; // laisse Home.jsx gérer l'ancre, seul
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      {/* Fond animé global */}
      <NeuralBackground opacity={0.28} linkDist={150} />

      {/* Défilement : voir ScrollManager ci-dessus */}
      <ScrollManager />

      {/* Routes */}
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/session-planning" element={<SessionPlanning />} />
          <Route path="/ink-red-plumes" element={<InkRedPlumes />} />
          <Route path="/creative-suite" element={<CreativeSuite />} />
          <Route path="/agencyos" element={<AgencyOS />} />
          <Route path="/sereno" element={<Sereno />} />
          <Route path="/trajet-formateur" element={<TrajetFormateur />} />
          <Route path="/velocean" element={<Velocean />} />
          <Route path="/vitrines-locales" element={<VitrinesLocales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
