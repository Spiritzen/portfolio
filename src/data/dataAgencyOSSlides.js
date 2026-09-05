// src/data/dataAgencyOSSlides.js
export function getAgencyOSSlides(base) {
  return [
    {
      src: `${base}images/agencyOS/agencyOS1.jpg`,
      title: "Tableau de bord et indicateurs",
      caption:
        "Une vue synthétique du chiffre d'affaires, des projets actifs, des tâches ouvertes et des factures impayées pour piloter l'activité dès la connexion.",
    },
    {
      src: `${base}images/agencyOS/agencyOS2.jpg`,
      title: "CRM — Clients et contacts",
      caption:
        "Centralisation des entreprises, des contacts et des informations utiles pour conserver une vision claire de chaque relation commerciale.",
    },
    {
      src: `${base}images/agencyOS/agencyOS3.jpg`,
      title: "Projets, tâches et Kanban",
      caption:
        "Pilotage de l'avancement par projet, répartition des tâches et suivi visuel du travail grâce au tableau Kanban.",
    },
    {
      // ℹ️ Légende ajustée après inspection visuelle : la capture montre le
      // suivi du temps (Timesheet) mais aucune donnée de rentabilité —
      // cf. rapport final du sprint « AgencyOS carrousel MAJ ».
      src: `${base}images/agencyOS/agencyOS4.jpg`,
      title: "Suivi du temps (Timesheet)",
      caption:
        "Suivi hebdomadaire du temps consacré aux missions, avec le détail des heures par jour et par tâche.",
    },
    {
      src: `${base}images/agencyOS/agencyOS5.jpg`,
      title: "Devis, factures et paiements",
      caption:
        "Gestion du cycle commercial, du devis à la facture, avec suivi des statuts et des règlements.",
    },
    {
      // ℹ️ Légende ajustée après inspection visuelle : la capture montre le
      // module Dépenses seul, sans vue consolidée du chiffre d'affaires —
      // cf. rapport final du sprint « AgencyOS carrousel MAJ ».
      src: `${base}images/agencyOS/agencyOS6.jpg`,
      title: "Dépenses",
      caption:
        "Suivi des dépenses de l'agence, classées par catégorie et reliées aux projets concernés.",
    },
    {
      src: `${base}images/agencyOS/agencyOS7.jpg`,
      title: "Équipe, rôles et invitations",
      caption:
        "Gestion des membres, attribution des rôles et envoi d'invitations afin d'organiser clairement les accès au sein de chaque organisation.",
    },
  ];
}
