// src/pages/CcLocation.jsx
import ComingSoon from "./ComingSoon.jsx";

// Pour ajouter des images :
// 1. Dépose tes captures dans public/images/cc-location/
// 2. Ajoute leurs noms dans ce tableau :
const images = [
  // "images/cc-location/shot1.jpg",
  // "images/cc-location/shot2.jpg",
];

export default function CcLocation() {
  return (
    <ComingSoon
      title="CC Location"
      tag=".NET / C# + Razor Pages"
      subtitle="Application web de gestion de location de véhicules."
      description="Application ASP.NET Core construite avec Razor Pages : gestion du catalogue de véhicules, réservations, suivi client et facturation. Logique métier en C#, base de données SQL et interface serveur-side rendering."
      stack={[".NET", "ASP.NET Core", "C#", "Razor Pages", "SQL Server", "Entity Framework"]}
      images={images}
    />
  );
}
