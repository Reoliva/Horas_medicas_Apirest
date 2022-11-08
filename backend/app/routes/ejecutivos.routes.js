module.exports = app => {
    const ejecutivos = require("../controllers/ejecutivos.controller.js");
    var router = require("express").Router();

    router.post("/", ejecutivos.create);
    router.get("/", ejecutivos.findAll);
    router.get("/:id", ejecutivos.findOne);
    router.put("/:id", ejecutivos.update);
    router.delete("/:id", ejecutivos.delete);
    router.delete("/", ejecutivos.deleteAll);
    app.use('/api/ejecutivos', router);
 };
