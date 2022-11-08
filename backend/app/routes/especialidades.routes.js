module.exports = app => {
    const Especialidades = require("../controllers/especialidades.controller.js");
    var router = require("express").Router();

    router.post("/", Especialidades.create);
    router.get("/", Especialidades.findAll);
    router.get("/:id", Especialidades.findOne);
    router.put("/:id", Especialidades.update);
    router.delete("/:id", Especialidades.delete);
    router.delete("/", Especialidades.deleteAll);
    app.use('/api/Especialidades', router);
 };
