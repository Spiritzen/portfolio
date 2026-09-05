import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InkRedPlumes from "./pages/InkRedPlumes.jsx";
import SessionPlanning from "./pages/SessionPlanning.jsx";
import CreativeSuite from "./pages/CreativeSuite.jsx";
import NotFound from "./pages/NotFound.jsx";
import NeuralBackground from "./components/NeuralBackground.jsx";
import AgencyOS from "./pages/AgencyOS.jsx";
import Sereno from "./pages/Sereno.jsx";
import TrajetFormateur from "./pages/TrajetFormateur.jsx";
import Velocean from "./pages/Velocean.jsx";
import VitrinesLocales from "./pages/VitrinesLocales.jsx";

// ℹ️ CC Location, EcoList, Dev-Game Unity et Artist 2D/3D ont été retirées
// de la grille d'accueil et de ces routes publiques (sprint catalogue
// GitHub). Leurs fichiers sources (src/pages/CcLocation.jsx, EcoList.jsx,
// DevGameUnity.jsx, Artist2D3D.jsx) ne sont PAS supprimés : la suppression
// physique sera décidée plus tard.

export default function App() {
  return (
    <>
      {/* Fond animé global */}
      <NeuralBackground opacity={0.28} linkDist={150} />

      {/* Routes */}
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
    </>
  );
}
