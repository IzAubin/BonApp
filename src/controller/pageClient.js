let plats = require("../model/plats.js");
let detailCommande = require("../model/detailCommande.js");
let commandes = require("../model/Commande.js");
//------------------> vers menu
exports.getMenu = async (req, res, next) => {
  res.render("menu", {
    liste: await plats.getActif(),
  });
};
// info from Menu and than Pushes info dans le PANIER (input HIDDEN)
exports.ajouterAuPanier = async (req, res, next) => {
  let vegeCorrection = "végétarien";
  if (req.body.vege != "vege") {
    vegeCorrection = "carnivore";
  }
  await detailCommande.AjouterAuPanier(
    "Isabelle Tran",
    req.body.nom,
    vegeCorrection,
    req.body.portion,
    req.body.prix * req.body.portion,
    0
  );
  console.log("req.body.vege= " + req.body.vege);
};
// AJOUTER ------> panier
exports.postMenu = async (req, res, next) => {
  res.render("menu");
};
//------------------> vers panier
exports.getPanier = async (req, res, next) => {
  const lesPlats = await detailCommande.getPanier();
  res.render("panier", {
    detailCommande: lesPlats,
  });
};
//------------------> vers Historique
exports.getHistorique = async (req, res, next) => {
  const lesHistorique = await detailCommande.getHistorique();
  res.render("historique", {
    Historique: lesHistorique,
  });
};
//------------------> assigner numCommande, nouvelle commande
exports.postPanier = async (req, res, next) => {
  let nbPlat = await detailCommande.nbPlats();
  let totalPanier = 0;
  console.log("***Le Total Prix portion: " + req.body.totalPrixPortions);
  // let listePlats= await detailCommande.getPanier()
  for (i = 0; i < nbPlat; i++) {}

  let id_Derniere_Commande = await commandes.countCommande();
  console.log("***id_Derniere_Commande: " + id_Derniere_Commande);
  await commandes.creerCommande(totalPanier);
  await detailCommande.updateNumCommande(id_Derniere_Commande + 1);
  res.redirect("/menu");
};
