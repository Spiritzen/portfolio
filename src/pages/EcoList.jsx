// src/pages/EcoList.jsx
import ComingSoon from "./ComingSoon.jsx";

// Pour ajouter des images :
// 1. Dépose tes captures dans public/images/ecolist/
// 2. Ajoute leurs noms dans ce tableau :
const images = [
  // "images/ecolist/shot1.jpg",
  // "images/ecolist/shot2.jpg",
];

export default function EcoList() {
  return (
    <ComingSoon
      title="EcoList"
      tag="Android / Kotlin"
      subtitle="Application mobile Android de liste de courses éco-responsable."
      description="Application native Android développée avec Kotlin et Android Studio : gestion de listes de courses, tri par catégories, interface Material Design épurée. Pensée pour encourager des achats plus responsables au quotidien."
      stack={[
        { label: "Android Studio", badge: "badge-green" },
        { label: "Kotlin", badge: "badge-green" },
        { label: "Room", badge: "badge-green" },
        { label: "Material Design", badge: "badge-green" },
      ]}
      images={images}
    />
  );
}
