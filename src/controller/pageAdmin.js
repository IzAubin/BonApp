let plats = require("../model/plats.js");
//------------------> vers inventaire
exports.getInventaire = async (req, res, next) => {
  const lesPlats = await plats.getInventaire();
  res.render("inventaire", {
    Plats: lesPlats,
  });
};
//------------------> vers actifRecette
exports.postInventaire = async (req, res, next) => {
   await plats.delete(req.body.modifierButton);
  const lesPlats = await plats.getInventaire();
  res.render("actifRecette", {
    leId: req.body.id,
    lImage: req.body.image,
    leNom: req.body.nom,
    laDescription: req.body.description,
    lePrix: req.body.prix,
    lActif: req.body.actif,
  });
};
//------------------> Retour Inventaire apres correction
exports.postActifRecette = async (req, res, next) => {
  await plats.postActifRecette(
    req.body.image,
    req.body.nom,
    req.body.description,
    req.body.prix,
    req.body.actif
  );
  res.redirect("/inventaire");
};
//------------------> vers addRecette
exports.getAddRecette = (req, res, next) => {
  res.render("addRecette");
};
//------------------> vers addRecette (ajout d'un plat)
exports.postAddRecette = async (req, res, next) => {
  await plats.postAddRecette(
    req.body.image,
    req.body.nom,
    req.body.description,
    req.body.prix,
    req.body.actif
  );
  res.render("addRecette");
};
