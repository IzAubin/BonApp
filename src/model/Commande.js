let db = require("./db.js");

const Commande = db.sequelize.define("commande", {
  idClient: db.Sequelize.DataTypes.STRING,
  total: db.Sequelize.DataTypes.STRING,
  statutCommande: db.Sequelize.DataTypes.STRING,
  isHidden: db.Sequelize.DataTypes.STRING, //bouton TERMINÉ
});
//------------------> pour pageAdminCommande (afficher)
exports.getCommandeEnCours = async (req, res, next) => {
  const commandesEnCours = await Commande.findAll();
  return commandesEnCours;
};
//------------------> pour pageAdminCommande (update)
exports.postCommandeEnCours = async (p_id, req, res, next) => {
  await Commande.update(
    {
      statutCommande: "TERMINÉ",
      isHidden: "display:none",
    },
    {
      where: {
        id: p_id,
      },
    }
  );
};
// trouver le id de la derniere commande
exports.countCommande = async (req, res, next) => {
  const amount = await Commande.count();
  return amount;
};
// obtenir statut derniere commande
exports.statusLastCommande = async (p_id, req, res, next) => {
  const status = await Commande.findOne({ where: { id: p_id } });
  return status;
};
// pour creer nouvelle commande 
exports.creerCommande = async ( p_total, req, res, next) => {
  await db.sequelize.sync({ force: false });
  Commande.create({
    idClient: 1,
    total: p_total,
    statutCommande: "enCours",
    isHidden: "display:block",
  });
};

