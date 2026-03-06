// src/data/dataIRPSlides.js
export function getIRPSlides(base) {
  return [
    {
      src: `${base}images/inkredplumes/shot01-768.jpg`,
      title: "01 Accueil & navigation SPA",
      caption: "Page d'accueil d'Ink Red Plumes : mise en avant des ouvrages et navigation cohérente avec la charte (typos, contrastes, rythme). L'application est une SPA : les interactions principales se font sans rechargement. Les entrées clés (connexion, recherche, publier) sont accessibles au clavier avec focus visible pour une expérience fluide sur desktop et mobile.",
    },
    {
      src: `${base}images/inkredplumes/shot02-768.jpg`,
      title: "02 Authentification JWT (connexion/inscription)",
      caption: "Modale d'authentification : après soumission, l'API renvoie un JWT utilisé pour sécuriser les requêtes suivantes. Les erreurs sont gérées côté UI (messages clairs, champs marqués). Cet écran pose la base de la séparation des droits : l'utilisateur connecté bénéficie de fonctionnalités supplémentaires selon son rôle (acheteur ou vendeur), contrôlé côté back.",
    },
    {
      src: `${base}images/inkredplumes/shot03-768.jpg`,
      title: "03 Rôles & visibilité des actions",
      caption: "Démonstration de la gestion des rôles : un vendeur voit « Publier un livre » et l'édition/suppression de ses ouvrages ; un acheteur voit l'achat simulé ou l'ajout à la wishlist. Le contrôle est double : masquage côté front pour l'UX, et vérification robuste côté API (autorisation JWT/claims) pour garantir l'intégrité des opérations sensibles.",
    },
    {
      src: `${base}images/inkredplumes/shot04-768.jpg`,
      title: "04 Publication d'un livre (modale « Créer »)",
      caption: "Création d'un livre en modale pour rester dans le flux SPA. Champs : titre, auteur, résumé, catégories, prix, visuel. Validations immédiates côté front (requis, longueurs, formats). À l'envoi, une requête REST crée la ressource (201 Created) et la liste se met à jour sans rechargement, offrant une sensation d'éditeur rapide et moderne.",
    },
    {
      src: `${base}images/inkredplumes/shot05-768.jpg`,
      title: "05 Édition d'un livre (modale « Modifier »)",
      caption: "Édition en place via modale : les champs sont préremplis, on corrige puis on confirme. Les validations maintiennent la cohérence (prix > 0, catégories valides, longueur des textes). La mise à jour s'effectue par un PUT/PATCH authentifié. Un retour visuel (toast/notification) confirme l'opération et l'UI se réconcilie avec l'état de l'API.",
    },
    {
      src: `${base}images/inkredplumes/shot06-768.jpg`,
      title: "06 Fiche livre (détails & actions)",
      caption: "La fiche détail présente l'essentiel (titre, couverture, résumé, catégories) et les actions selon le rôle : achat simulé / wishlist pour l'acheteur, édition/suppression pour le vendeur propriétaire. La section avis/commentaires est prévue en itération ultérieure. Objectif : clarté, temps de lecture court, actions primaires immédiatement visibles.",
    },
    {
      src: `${base}images/inkredplumes/shot07-768.jpg`,
      title: "07 Recherche & filtres (catégories/texte)",
      caption: "Moteur de recherche avec filtres : par texte (titre/auteur), par catégorie et tri si besoin. Les résultats sont paginés côté API pour rester performants. L'UI montre l'état des filtres actifs et permet de les réinitialiser rapidement. Ce module met en valeur la pertinence des réponses et la robustesse de l'API (requêtes composées, délais courts).",
    },
    {
      src: `${base}images/inkredplumes/shot08-768.jpg`,
      title: "08 Tableau de bord vendeur",
      caption: "Vue vendeur listant ses œuvres : statut de publication, date de mise à jour, métriques simples (ex. vues/wishlist si prévu) et actions rapides (éditer/supprimer). Cette page illustre le parcours producteur : retrouver, ajuster, enrichir son catalogue sans friction. L'enjeu est la lisibilité des informations et la réactivité des opérations CRUD.",
    },
    {
      src: `${base}images/inkredplumes/shot09-768.jpg`,
      title: "09 Sécurité Spring — SecurityConfig & règles d'accès",
      caption: "Extrait de SecurityConfig : définition centrale des règles d'accès via le DSL HttpSecurity. On expose les endpoints publics (/auth/**, GET livres) et on protège le reste par rôles (seller/admin). Session stateless, filtre JWT avant UsernamePasswordAuthenticationFilter, CORS/CSRF adaptés API. En complément, @PreAuthorize renforce le contrôle au niveau méthodes : le front masque, le back fait autorité.",
    },
    {
      src: `${base}images/inkredplumes/shot10-768.jpg`,
      title: "10 API REST (Postman) — endpoints & JWT",
      caption: "Capture Postman montrant l'authentification (login) puis un appel protégé (ex. POST /api/books) avec l'entête Authorization: Bearer <JWT>. On met en évidence le schéma JSON d'entrée, le code retour (201/200) et les erreurs prévues (400/401/403). Cette preuve côté back garantit que l'UI n'est pas « maquillée » : les règles de sécurité et de validation sont réellement appliquées.",
    },
    {
      src: `${base}images/inkredplumes/shot11-768.jpg`,
      title: "11 Base MariaDB (HeidiSQL) — tables & relations",
      caption: "Vue HeidiSQL des tables : users, books, categories, tables de liaison (ex. book_categories), éventuellement orders/ratings selon le périmètre. Les types et clés étrangères assurent l'intégrité (un livre appartient à un vendeur, catégories valides). Cette capture matérialise le MCD/MLD dans une base opérationnelle, prête pour la production.",
    },
    {
      src: `${base}images/inkredplumes/shot12-768.jpg`,
      title: "12 Responsive design — mobile/tablette/desktop",
      caption: "Vue mobile (~360px) : la grille passe en 1 colonne, le header s'empile et les boutons ont des zones tactiles confortables. Typo avec clamp() pour une lisibilité stable, images ajustées sans débordement, aucune barre de défilement horizontale. Les animations respectent prefers-reduced-motion. Objectif : une UX cohérente et accessible, quel que soit l'appareil.",
    },
  ];
}
