import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InkRedPlumes from "./pages/InkRedPlumes.jsx";
import SessionPlanning from "./pages/SessionPlanning.jsx"; // ✅ AJOUT

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/session-planning" element={<SessionPlanning />} /> {/* ✅ AJOUT */}
      <Route path="/ink-red-plumes" element={<InkRedPlumes />} />
    </Routes>
  );
}
