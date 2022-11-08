// Importar dependencias
const db = require("../models");
const ejecutivos = db.ejecutivos;
const Op = db.Sequelize.Op;
// Crear un nuevo ejecutivo
exports.create = (req, res) => {
    // Validar consulta
    console.log(req.body)
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Crear y guardar en base de datos
    ejecutivos.create({
            rut_ejecutivo: req.body.rut_ejecutivo,
            Cuenta_Ejecutivo: req.body.Cuenta_Ejecutivo,
            Name1_Ejec: req.body.Name1_Ejec,
            Name2_Ejec: req.body.Name2_Ejec,
            Apellidos_Ejec: req.body.Apellidos_Ejec
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear un ejecutivo"
            });
        });
};
// Retornar todos los ejecutivos de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    ejecutivos.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error en la búsqueda"
            });
        });
};
// Buscar un ejecutivo por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    ejecutivos.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el ejecutivo.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar un ejecutivo por su id
exports.update = (req, res) => {
    const id = req.params.id;
    ejecutivos.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ejecutivo actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el ejecutivo`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un ejecutivo
exports.delete = (req, res) => {
    const id = req.params.id;
    ejecutivos.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ejecutivo eliminado"
                });
            } else {
                res.send({
                    message: `ejecutivo no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el ejecutivo"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    ejecutivos.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} ejecutivos eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas los ejecutivos."
            });
        });
};
