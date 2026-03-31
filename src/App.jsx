import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InkRedPlumes from "./pages/InkRedPlumes.jsx";
import SessionPlanning from "./pages/SessionPlanning.jsx";
import CcLocation from "./pages/CcLocation.jsx";
import EcoList from "./pages/EcoList.jsx";
import DevGameUnity from "./pages/DevGameUnity.jsx";
import Artist2D3D from "./pages/Artist2D3D.jsx";
import CreativeSuite from "./pages/CreativeSuite.jsx";
import NotFound from "./pages/NotFound.jsx";
import NeuralBackground from "./components/NeuralBackground.jsx";

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
        <Route path="/cc-location" element={<CcLocation />} />
        <Route path="/ecolist" element={<EcoList />} />
        <Route path="/dev-game-unity" element={<DevGameUnity />} />
        <Route path="/artist-2d-3d" element={<Artist2D3D />} />
        <Route path="/creative-suite" element={<CreativeSuite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
