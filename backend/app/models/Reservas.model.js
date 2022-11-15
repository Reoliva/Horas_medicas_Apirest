// Tabla Reservas
module.exports = (sequelize, Sequelize) => {
    const reservas = sequelize.define("Reservas", {
      Numero_reserva: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Rut_Medico: {
        type: Sequelize.INTEGER
      },
      Rut_Paciente: {
        type: Sequelize.INTEGER
      },
      Fecha: {
        type: Sequelize.DATEONLY
      },
      Hora: {
        type: Sequelize.TIME
      },
      Reservado_el: {
        type: Sequelize.DATE
      }
    });
    return reservas;
  };  