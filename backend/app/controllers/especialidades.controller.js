// Importar dependencias
const db = require("../models");
const Especialidades = db.especialidades;
const Op = db.Sequelize.Op;
// Crear un nuevo especialidades
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
    Especialidades.create({
            Id_especialidad: req.body.Id_especialidad,
            Nombre_especialidad: req.body.Nombre_especialidad
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear un especialidades"
            });
        });
};
// Retornar todos los Especialidades de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Especialidades.findAll({ where: condition })
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
// Buscar un especialidades por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Especialidades.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el especialidades.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar un especialidades por su id
exports.update = (req, res) => {
    const id = req.params.id;
    Especialidades.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "especialidades actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el especialidades`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un especialidades
exports.delete = (req, res) => {
    const id = req.params.id;
    Especialidades.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "especialidades eliminado"
                });
            } else {
                res.send({
                    message: `especialidades no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el especialidades"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Especialidades.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Especialidades eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas los Especialidades."
            });
        });
};
