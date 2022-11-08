module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "Horas_medicas_server",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  