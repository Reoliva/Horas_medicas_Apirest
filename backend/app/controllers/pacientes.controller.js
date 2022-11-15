// Importar dependencias
const db = require("../models");
const Pacientes = db.pacientes;
const Op = db.Sequelize.Op;
// Crear un nuevo Pacientes
exports.create = (req, res) => {
    // Validar consulta
    console.log(req.body)
    if (!req.body.rut_paciente) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Crear y guardar en base de datos
    Pacientes.create({
            rut_paciente: req.body.rut_paciente,
            Name1_Pac: req.body.Name1_Pac,
            Name2_Pac: req.body.Name2_Pac,
            Apellidos_Pac: req.body.Apellidos_Pac,
            Sexo: req.body.Sexo,
            Fecha_Nacimiento: req.body.Fecha_Nacimiento,
            Prevision: req.body.Prevision,
            Telefono: req.body.Telefono,
            Correo_pac: req.body.Correo_pac
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear un Pacientes"
            });
        });
};
// Retornar todos los Pacientes de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Pacientes.findAll({ where: condition })
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
// Buscar un Pacientes por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Pacientes.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el Pacientes.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar un Pacientes por su id
exports.update = (req, res) => {
    const id = req.params.id;
    Pacientes.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pacientes actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el Pacientes`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un Pacientes
exports.delete = (req, res) => {
    const id = req.params.rut_paciente;
    Pacientes.destroy({
        where: { rut_paciente: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pacientes eliminado"
                });
            } else {
                res.send({
                    message: `Pacientes no encontrado`
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message: "Error al eliminar el Pacientes"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Pacientes.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Pacientes eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas los Pacientes."
            });
        });
};
