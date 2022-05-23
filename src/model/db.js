const { Sequelize, Model, DataTypes } = require("sequelize");
let db = {};

const sequelize = new Sequelize("bonapp", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
