import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InkRedPlumes from "./pages/InkRedPlumes.jsx";
import SessionPlanning from "./pages/SessionPlanning.jsx";
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
      </Routes>
    </>
  );
}
