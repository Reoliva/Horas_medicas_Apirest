// Tabla medicos
module.exports = (sequelize, Sequelize) => {
    const medicos = sequelize.define("Medicos", {
      rut_medico: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Name1_Doc: {
        type: Sequelize.STRING
      },
      Name1_Doc: {
        type: Sequelize.STRING
      },
      Apellidos_Doc: {
        type: Sequelize.STRING
      },
      Num_Box: {
        type: Sequelize.INTEGER
      }
    });
    return medicos;
  };  