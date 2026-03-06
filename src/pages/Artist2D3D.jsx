// src/pages/Artist2D3D.jsx
import ComingSoon from "./ComingSoon.jsx";

// Pour ajouter des images :
// 1. Dépose tes créations dans public/images/artist-2d-3d/
// 2. Ajoute leurs noms dans ce tableau :
const images = [
  // "images/artist-2d-3d/render1.jpg",
  // "images/artist-2d-3d/render2.jpg",
  // "images/artist-2d-3d/illus1.jpg",
];

export default function Artist2D3D() {
  return (
    <ComingSoon
      title="Artist 2D / 3D"
      tag="Blender / Photoshop"
      subtitle="Modélisation 3D, rendu et illustration numérique."
      description="Travaux artistiques personnels réalisés avec Blender (modélisation, rigging, rendu) et Photoshop (illustrations numériques, retouche, compositing). Cette sensibilité graphique enrichit directement ma façon d'aborder l'UI et l'UX dans mes projets de développement."
      stack={[
        { label: "Blender", badge: "badge-orange" },
        { label: "Photoshop", badge: "badge-orange" },
        { label: "3D Modeling", badge: "badge-orange" },
        { label: "Rendu", badge: "badge-orange" },
        { label: "Illustration numérique", badge: "badge-orange" },
      ]}
      images={images}
      footerLabel="Artist 2D/3D"
    />
  );
}
