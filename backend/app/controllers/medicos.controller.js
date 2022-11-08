// Importar dependencias
const db = require("../models");
const Medicos = db.medicos;
const Op = db.Sequelize.Op;
// Crear un nuevo Medicos
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
    Medicos.create({
            rut_medico: req.body.Id_medico,
            Name1_Doc: req.body.Name1_Doc,
            Name2_Doc: req.body.Name2_Doc,
            Apellidos_Doc: req.body.Apellidos_Doc,
            Num_Box: req.body.Num_Box
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear un Medicos"
            });
        });
};
// Retornar todos los Medicos de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Medicos.findAll({ where: condition })
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
// Buscar un Medicos por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Medicos.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el Medicos.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar un Medicos por su id
exports.update = (req, res) => {
    const id = req.params.id;
    Medicos.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Medicos actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el Medicos`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un Medicos
exports.delete = (req, res) => {
    const id = req.params.id;
    Medicos.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Medicos eliminado"
                });
            } else {
                res.send({
                    message: `Medicos no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el Medicos"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Medicos.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Medicos eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas los Medicos."
            });
        });
};
