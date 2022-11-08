// Tabla pacientes
module.exports = (sequelize, Sequelize) => {
    const pacientes = sequelize.define("Pacientes", {
      rut_paciente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Name1_Pac: {
        type: Sequelize.STRING
      },
      Name2_Pac: {
        type: Sequelize.STRING
      },
      Apellidos_Pac: {
        type: Sequelize.STRING
      },
      Sexo: {
        type: Sequelize.STRING
      },
      Fecha_Nacimiento: {
        type: Sequelize.DATEONLY
      },
      Prevision: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.INTEGER
      },
      Correo_pac: {
        type: Sequelize.STRING
      }
    });
    return pacientes;
  };  