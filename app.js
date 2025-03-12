const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const evenements = [
  {
    id: 1,
    titre: "Festival des Étoiles Filantes",
    date: "2025-08-12",
    description: "Observation des étoiles avec des experts en astronomie.",
    statut: "actif",
  },
  {
    id: 2,
    titre: "Atelier Cuisine Moleculaire",
    date: "2025-09-18",
    description: "Découvrez les secrets de la gastronomie scientifique.",
    statut: "actif",
  },
  {
    id: 3,
    titre: "Expédition en Réalité Virtuelle",
    date: "2025-10-05",
    description: "Voyage immersif dans des mondes inexplorés grâce à la VR.",
    statut: "inactif",
  },
  {
    id: 4,
    titre: "Championnat d'Échecs Géants",
    date: "2025-11-23",
    description: "Affrontez des adversaires sur un échiquier grandeur nature.",
    statut: "actif",
  },
  {
    id: 5,
    titre: "Escape Game Horreur",
    date: "2025-12-31",
    description: "Évadez-vous d'un manoir hanté en résolvant des énigmes.",
    statut: "inactif",
  },
];

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { evenements });
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
