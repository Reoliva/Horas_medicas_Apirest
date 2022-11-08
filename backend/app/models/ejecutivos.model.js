// Tabla ejecutivos
module.exports = (sequelize, Sequelize) => {
    const ejecutivos = sequelize.define("Ejecutivos", {
      rut_ejecutivo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Cuenta_Ejecutivo: {
        type: Sequelize.STRING
      },
      Name1_Ejec: {
        type: Sequelize.STRING
      },
      Name1_Ejec: {
        type: Sequelize.STRING
      },
      Apellidos_Ejec: {
        type: Sequelize.STRING
      }
    });
    return ejecutivos;
  };  