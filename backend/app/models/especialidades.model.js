// Tabla Especialidades
module.exports = (sequelize, Sequelize) => {
    const especialidades = sequelize.define("Especialidades", {
      Id_especialidad: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nombre_especialidad: {
        type: Sequelize.STRING
      }
    });
    return especialidades;
  }; 