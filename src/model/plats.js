let db = require("./db.js");

const Plats = db.sequelize.define("plats", {
  image: db.Sequelize.DataTypes.STRING,
  nom: db.Sequelize.DataTypes.STRING,
  description: db.Sequelize.DataTypes.STRING,
  prix: db.Sequelize.DataTypes.STRING,
  actif: db.Sequelize.DataTypes.INTEGER,
});

(async () => {
  await db.sequelize.sync({ force: true });
  await Plats.create({
    image: 2,
    nom: "Burger Du Jour",
    description:
      "Galette de bœuf 100 % canadien, cheddar, bacon, tomate, laitue romaine, oignon rouge, sauce maison servi avec frites",
    prix: "25",
    actif: 1,
  });
})();

//------------------> vers inventaire

exports.getInventaire = async (req, res, next) => {
  const lesPlats = await Plats.findAll();
  return lesPlats;
};

//------------------> vers actifRecette efface ancien plat

exports.delete = async (p_id, req, res, next) => {
  await Plats.destroy({
    where: {
      id: p_id,
    },
  });
};

//------------------> vers menu

exports.getActif = async (req, res, next) => {
  const lesPlats = await Plats.findAll({
    where: {
      actif: true,
    },
  });
  return lesPlats;
};

//------------------> vers Database, create plat

exports.postAddRecette = async (
  p_image,
  p_nom,
  p_description,
  p_prix,
  p_actif,
  req,
  res,
  next
) => {
  await db.sequelize.sync({ force: false });
  Plats.create({
    image: p_image,
    nom: p_nom,
    description: p_description,
    prix: p_prix,
    actif: p_actif,
  });
};

//------------------> vers Database, remplate plat

exports.postActifRecette = async (
  p_image,
  p_nom,
  p_description,
  p_prix,
  p_actif,
  req,
  res,
  next
) => {
  await db.sequelize.sync({ force: false });
  Plats.create({
    image: p_image,
    nom: p_nom,
    description: p_description,
    prix: p_prix,
    actif: p_actif,
  });
};
