// src/pages/DevGameUnity.jsx
import ComingSoon from "./ComingSoon.jsx";

// Pour ajouter des images :
// 1. Dépose tes captures dans public/images/dev-game-unity/
// 2. Ajoute leurs noms dans ce tableau :
const images = [
  // "images/dev-game-unity/shot1.jpg",
  // "images/dev-game-unity/shot2.jpg",
];

export default function DevGameUnity() {
  return (
    <ComingSoon
      title="Dev-Game Unity"
      tag="Unity / C#"
      subtitle="Développement d'un jeu vidéo avec Unity et C#."
      description="Projet de création de jeu vidéo avec Unity : conception des mécaniques de gameplay, scripting C#, gestion des scènes, des assets et des animations. Un exercice concret de logique de programmation appliquée à l'interactif."
      stack={[
        { label: "Unity", badge: "badge-red" },
        { label: "C#", badge: "badge-red" },
        { label: "Game Design" },
        { label: "Animations" },
        { label: "Physics" },
      ]}
      images={images}
      footerLabel="Dev-Game Unity"
    />
  );
}
