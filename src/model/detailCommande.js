let db = require("./db.js");

const DetailCommande = db.sequelize.define("detailCommande", {
  client: db.Sequelize.DataTypes.STRING,
  nom: db.Sequelize.DataTypes.STRING,
  vege: db.Sequelize.DataTypes.STRING,
  portion: db.Sequelize.DataTypes.STRING,
  prix: db.Sequelize.DataTypes.STRING,
  numCommande: db.Sequelize.DataTypes.STRING,
});
//------------------> vers pagePanier,content panier seulement
exports.getPanier = async (req, res, next) => {
  const lePanier = await DetailCommande.findAll({ where: { numCommande: 0 } });
  return lePanier;
};
//------------------> vers detailCommande
exports.AjouterAuPanier = async (
  p_client,
  p_nom,
  p_vege,
  p_portion,
  p_totale,
  p_numCommande,
  req,
  res,
  next
) => {
  await db.sequelize.sync({ force: false });
  DetailCommande.create({
    client: p_client,
    nom: p_nom,
    vege: p_vege,
    portion: p_portion,
    prix: p_totale,
    numCommande: p_numCommande,
  });
};
//------------------> vers Historique
exports.getHistorique = async (req, res, next) => {
  const lesHistorique = await DetailCommande.findAll();
  return lesHistorique;
};

//------------------>assigner# de la commande aux plats ajoutés
exports.updateNumCommande = async (p_numCommande, req, res, next) => {
  await DetailCommande.update(
    {
      numCommande: p_numCommande,
    },
    {
      where: {
        numCommande: 0,
      },
    }
  );
};
//
exports.nbPlats = async (req, res, next) => {
  const amount = await DetailCommande.count({ where: { numCommande: 0 } });
  console.log("nombre de plats: " + amount);
  return amount;
};
