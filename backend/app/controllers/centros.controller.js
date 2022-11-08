// Importar dependencias
const db = require("../models");
const Centros = db.centros;
const Op = db.Sequelize.Op;
// Crear un nuevo centro
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
    Centros.create({
            Codigo_Postal: req.body.Codigo_Postal,
            Ciudad: req.body.Ciudad,
            Direccion: req.body.Direccion,
            Telefono: req.body.Telefono
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear un centro"
            });
        });
};
// Retornar todos los centros de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Centros.findAll({ where: condition })
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
// Buscar un centro por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Centros.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el centro.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar un centro por su id
exports.update = (req, res) => {
    const id = req.params.id;
    Centros.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "centro actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el centro`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un centro
exports.delete = (req, res) => {
    const id = req.params.id;
    Centros.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "centro eliminado"
                });
            } else {
                res.send({
                    message: `Centro no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el centro"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Centros.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Centros eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas los centros."
            });
        });
};
