import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InkRedPlumes from "./pages/InkRedPlumes.jsx"; // si tu as créé cette page

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ink-red-plumes" element={<InkRedPlumes />} />
    </Routes>
  );
}
