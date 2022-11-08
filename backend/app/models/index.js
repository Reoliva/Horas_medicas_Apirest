// Importe de dependencias
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// Inicialización de Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Importa modelos a Sequelize
db.Centros = require("./centros.model.js")(sequelize, Sequelize);
db.ejecutivos = require("./ejecutivos.model.js")(sequelize, Sequelize);
db.especialidades = require("./especialidades.model.js")(sequelize, Sequelize);
db.medicos = require("./medicos.model.js")(sequelize, Sequelize);
db.pacientes = require("./pacientes.model.js")(sequelize, Sequelize);
db.reservas = require("./reservas.model.js")(sequelize, Sequelize);
module.exports = db;
