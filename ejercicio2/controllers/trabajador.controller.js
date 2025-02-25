const Trabajador = require('../models/trabajador.model');

let TrabajadorController = {};

TrabajadorController.crearTrabajador = async (req, res) => {
    try {
        const nuevoTrabajador = new Trabajador(req.body);
        const trabajadorGuardado = await nuevoTrabajador.save();
        res.json(trabajadorGuardado);
    } catch (error) {
        res.status(500).json({error: 'Error al crear el trabajador'});
    }
};

TrabajadorController.modificarTrabajador = async (req, res) => {
    try {
        const trabajadorActualizado = await Trabajador.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(trabajadorActualizado);
    } catch (error) {
        res.status(500).json({error: 'Error al actualizar el trabajador'});
    }
};

TrabajadorController.listarTrabajadores = async (req, res) => {
    try {
        const trabajadores = await Trabajador.find();
        res.json(trabajadores);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los trabajadores'});
    }
};

TrabajadorController.obtenerTrabajadorPorId = async (req, res) => {
    try {
        const trabajador = await Trabajador.findById(req.params.id);
        if (trabajador) {
            res.json(trabajador);
        } else {
            res.status(404).json({error: 'Trabajador no encontrado'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error al obtener el trabajador'});
    }
};

module.exports = TrabajadorController;
