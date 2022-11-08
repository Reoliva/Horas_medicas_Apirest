module.exports = app => {
    const Centros = require("../controllers/centros.controller.js");
    var router = require("express").Router();

    router.post("/", Centros.create);
    router.get("/", Centros.findAll);
    router.get("/:id", Centros.findOne);
    router.put("/:id", Centros.update);
    router.delete("/:id", Centros.delete);
    router.delete("/", Centros.deleteAll);
    app.use('/api/Centros', router);
 };
