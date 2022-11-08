// Importar dependencias
const db = require("../models");
const Reservas = db.reservas;
const Op = db.Sequelize.Op;
// Crear un nuevo Reservas
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
    Reservas.create({
            Numeor_reserva: req.body.Numero_reserva,
            Rut_Medico: req.body.Rut_Medico,
            Rut_Paciente: req.body.Rut_Paciente,
            Fecha_Hora: req.body.Fecha_Hora,
            Sexo: req.body.Sexo,
            Reservado_el: req.body.Reservado_el
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear un Reservas"
            });
        });
};
// Retornar todos los Reservas de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Reservas.findAll({ where: condition })
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
// Buscar un Reservas por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Reservas.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el Reservas.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar un Reservas por su id
exports.update = (req, res) => {
    const id = req.params.id;
    Reservas.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Reservas actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el Reservas`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un Reservas
exports.delete = (req, res) => {
    const id = req.params.id;
    Reservas.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Reservas eliminado"
                });
            } else {
                res.send({
                    message: `Reservas no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el Reservas"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Reservas.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Reservas eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas los Reservas."
            });
        });
};
