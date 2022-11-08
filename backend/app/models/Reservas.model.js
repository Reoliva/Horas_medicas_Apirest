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
      Fecha_Hora: {
        type: Sequelize.DATE
      },
      Reservado_el: {
        type: Sequelize.DATE
      }
    });
    return reservas;
  };  