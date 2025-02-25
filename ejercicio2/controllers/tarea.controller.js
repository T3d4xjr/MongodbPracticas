const Tarea = require('../models/tarea.model');

let TareaController = {};

TareaController.crearTarea = async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        const tareaGuardada = await nuevaTarea.save();
        res.json(tareaGuardada);
    } catch (error) {
        res.status(500).json({error: 'Error al crear la tarea'});
    }
};

TareaController.modificarTarea = async (req, res) => {
    try {
        const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(tareaActualizada);
    } catch (error) {
        res.status(500).json({error: 'Error al actualizar la tarea'});
    }
};

TareaController.listarTareasDeTrabajador = async (req, res) => {
    try {
        const tareas = await Tarea.find({ trabajador: req.params.trabajadorId });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener las tareas'});
    }
};

TareaController.listarTareasPorEstado = async (req, res) => {
    try {
        const tareas = await Tarea.find({ trabajador: req.params.trabajadorId, estado: req.query.estado });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener las tareas'});
    }
};

TareaController.obtenerTareaPorId = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (tarea) {
            res.json(tarea);
        } else {
            res.status(404).json({error: 'Tarea no encontrada'});
        }
    } catch (error) {
        res.status(500).json({error: 'Error al obtener la tarea'});
    }
};

TareaController.marcarTareaCompletada = async (req, res) => {
    try {
        const tareaCompletada = await Tarea.findByIdAndUpdate(req.params.id, { estado: 'Completada' }, { new: true });
        res.json(tareaCompletada);
    } catch (error) {
        res.status(500).json({error: 'Error al marcar la tarea como completada'});
    }
};

module.exports = TareaController;
