module.exports = app => {
    const Reservas = require("../controllers/reservas.controller.js");
    var router = require("express").Router();

    router.post("/", Reservas.create);
    router.get("/", Reservas.findAll);
    router.get("/:id", Reservas.findOne);
    router.put("/:id", Reservas.update);
    router.delete("/:Numero_reserva", Reservas.delete);
    router.delete("/", Reservas.deleteAll);
    app.use('/api/Reservas', router);
 };
