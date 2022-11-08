module.exports = app => {
    const Pacientes = require("../controllers/pacientes.controller.js");
    var router = require("express").Router();

    router.post("/", Pacientes.create);
    router.get("/", Pacientes.findAll);
    router.get("/:id", Pacientes.findOne);
    router.put("/:id", Pacientes.update);
    router.delete("/:id", Pacientes.delete);
    router.delete("/", Pacientes.deleteAll);
    app.use('/api/Pacientes', router);
 };
