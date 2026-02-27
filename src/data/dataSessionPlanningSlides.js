// src/data/dataSessionPlanningSlides.js
// ✅ Fichier JS (pas JSX) : exporte une fonction qui génère les slides
// ✅ On passe "base" depuis le composant (import.meta.env.BASE_URL)

export function getSessionPlanningSlides(base) {
  return [
{
  src: `${base}images/sessionPlanning/mcd.jpg`,
  title: "01 Modèle Conceptuel de Données (MCD)",
  caption:
    "Conception du modèle relationnel réalisée sous Looping. On distingue les entités principales : Formation, Session, Formateur, Affectation, Disponibilité, Congé et Compétence. Les cardinalités formalisent les règles métier, notamment l’unicité d’affectation et la gestion des disponibilités. Cette étape structure toute la logique backend avant l’implémentation Spring Boot.",
},
{
  src: `${base}images/sessionPlanning/dictionnaireDeDonnees.jpg`,
  title: "02 Dictionnaire de données — structure technique",
  caption:
    "Extrait du dictionnaire de données formalisant les tables, types SQL, contraintes (PK/FK), valeurs par défaut et règles de nullabilité. Chaque entité du MCD est traduite en structure relationnelle précise, garantissant cohérence et intégrité référentielle. Ce travail prépare directement la génération des scripts SQL et l’implémentation des entités JPA côté Spring Boot.",
},
{
  src: `${base}images/sessionPlanning/bdd.jpg`,
  title: "03 Implémentation réelle — Base MariaDB (HeidiSQL)",
  caption:
    "Vue de la base relationnelle MariaDB via HeidiSQL. Les tables issues du dictionnaire sont matérialisées avec clés primaires, clés étrangères et contraintes d’intégrité. On distingue notamment les tables utilisateur, session, affectation, disponibilité et compétence. Cette étape confirme la cohérence entre le MCD, le modèle SQL et l’implémentation réelle en production locale.",
},
{
  src: `${base}images/sessionPlanning/workflow.jpg`,
  title: "04 Workflow métier — cycle de vie d’une session",
  caption:
    "Schéma du cycle de vie d’une session de formation : proposée, acceptée/refusée par le formateur, planifiée, en cours puis terminée. Ce workflow formalise les transitions autorisées selon les rôles (admin/gestionnaire, formateur) et garantit la cohérence des états en base. Les changements de statut sont contrôlés côté API afin d’empêcher toute transition invalide.",
},
{
  src: `${base}images/sessionPlanning/home.jpg`,
  title: "05 Interface utilisateur — page d’accueil",
  caption:
    "Vue d’accueil de l’application MyDashServ. L’interface met en avant la planification des sessions, l’assignation des formateurs et la détection des conflits. Les rôles (gestionnaire, formateur) sont clairement identifiés via des parcours distincts. L’objectif est de proposer une expérience fluide, moderne et orientée métier dès l’entrée sur la plateforme.",
},
{
  src: `${base}images/sessionPlanning/session.jpg`,
  title: "06 Dashboard sessions — gestion & suivi",
  caption:
    "Vue du tableau de gestion des sessions côté administrateur. L’interface permet la recherche multi-critères (statut, période, formation), la pagination et la modification des sessions. Les statuts (Planifiée, En cours…) sont synchronisés avec la base et contrôlés côté API. Cette vue matérialise la logique métier définie dans le workflow précédent.",
},
{
  src: `${base}images/sessionPlanning/match.jpg`,
  title: "07 Affectations — moteur de matching & contrôle des conflits",
  caption:
    "Interface d’affectation des sessions. Le moteur de matching analyse les compétences du formateur, ses disponibilités déclarées ainsi que ses périodes de congé. Un contrôle de chevauchement vérifie qu’aucune session ne recoupe un créneau déjà affecté. Toute tentative de conflit est bloquée côté API afin de garantir la cohérence du planning.",
},
{
  src: `${base}images/sessionPlanning/conflict.jpg`,
  title: "08 Détection de conflit — contrôle des créneaux",
  caption:
    "Exemple concret d’un conflit détecté par le moteur de matching. Le formateur apparaît indisponible avec un score négatif en raison d’un chevauchement de session et d’une incompatibilité de créneaux. Le système bloque l’affectation afin de préserver la cohérence du planning. Cette vérification est effectuée côté API et non uniquement côté interface.",
},
{
  src: `${base}images/sessionPlanning/postman.jpg`,
  title: "09 API REST sécurisée — JWT + Spring Security",
  caption:
    "Démonstration via Postman de l’authentification /api/auth/login. L’API retourne un JWT signé contenant les rôles (ex: ROLE_ADMIN). Les endpoints métier sont protégés et nécessitent l’en-tête Authorization: Bearer <token>. Toute requête sans token valide est automatiquement rejetée par le filtre de sécurité Spring."
},
{
  src: `${base}images/sessionPlanning/archi.jpg`,
  title: "10 Architecture Spring Boot — code structuré en couches",
  caption:
    "Backend structuré pour un projet maintenable : contrôleurs REST, services métier, repositories JPA, DTOs, entités et sécurité JWT. L’authentification illustre le flux complet : login → génération token → routes protégées. Objectif : lisibilité, séparation des responsabilités et robustesse côté API."
},
{
  src: `${base}images/sessionPlanning/jwt.jpg`,
  title: "11 Sécurité avancée — JwtFilter & SecurityContext",
  caption:
    "Chaque requête passe par un filtre JWT personnalisé. Le token est extrait, décodé et validé via JwtUtil. Si valide, l’authentification est injectée dans le SecurityContext Spring Security. Ce mécanisme permet une protection stateless des endpoints REST et un contrôle précis des rôles."
},
{
  src: `${base}images/sessionPlanning/conclusion.jpg`,
  title: "Conclusion — Apport pour une équipe technique",
  caption:
    "Capacité à concevoir et livrer une application métier sécurisée de bout en bout : backend Spring Boot structuré, API REST protégée, gestion des rôles et des contraintes métier complexes, frontend React intégré et architecture évolutive. Ce projet reflète mon autonomie, ma rigueur technique et ma capacité à m’intégrer rapidement dans un environnement de développement professionnel."
},
  ];
}