// Tabla centros
module.exports = (sequelize, Sequelize) => {
    const centros = sequelize.define("Centros", {
      Codigo_Postal: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Ciudad: {
        type: Sequelize.STRING
      },
      Direccion: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.INTEGER
      }
    });
    return centros;
  };  