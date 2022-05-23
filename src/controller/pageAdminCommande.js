let commandes = require("../model/Commande.js");

//------------------> vers commande
exports.getCommandeEnCours = async (req, res, next) => {
  const commandesEnCours = await commandes.getCommandeEnCours();
  res.render("enCours", {
    commandes: commandesEnCours,
  });
};

exports.postCommandeEnCours = async (req, res, next) => {
  await commandes.postCommandeEnCours(req.body.btnFini);
  res.redirect("/enCours");
};
