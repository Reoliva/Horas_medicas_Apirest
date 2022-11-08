module.exports = app => {
    const Medicos = require("../controllers/medicos.controller.js");
    var router = require("express").Router();

    router.post("/", Medicos.create);
    router.get("/", Medicos.findAll);
    router.get("/:id", Medicos.findOne);
    router.put("/:id", Medicos.update);
    router.delete("/:id", Medicos.delete);
    router.delete("/", Medicos.deleteAll);
    app.use('/api/Medicos', router);
 };
