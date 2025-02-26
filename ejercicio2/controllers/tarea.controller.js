const Tarea = require('../models/tarea.model');

let TareaController = {};

TareaController.crearTarea = async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        const tareaGuardada = await nuevaTarea.save();
        res.status(201).json(tareaGuardada);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea', detalle: error.message });
    }
};

TareaController.modificarTarea = async (req, res) => {
    try {
        const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.idTarea, req.body, { new: true });

        if (!tareaActualizada) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        res.json(tareaActualizada);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea', detalle: error.message });
    }
};

TareaController.listarTareasDeTrabajador = async (req, res) => {
    try {
        const tareas = await Tarea.find({ trabajador: req.params.trabajadorId });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas', detalle: error.message });
    }
};

TareaController.listarTareasPorEstado = async (req, res) => {
    try {
        const tareas = await Tarea.find({ trabajador: req.params.trabajadorId, estado: req.params.estado });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas por estado', detalle: error.message });
    }
};

TareaController.obtenerTareaPorId = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.idTarea);
        
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        res.json(tarea);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la tarea', detalle: error.message });
    }
};

TareaController.marcarTareaCompletada = async (req, res) => {
    try {
        const tareaCompletada = await Tarea.findByIdAndUpdate(
            req.params.idTarea, 
            { estado: 'Completada' }, 
            { new: true }
        );

        if (!tareaCompletada) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }

        res.json(tareaCompletada);
    } catch (error) {
        res.status(500).json({ error: 'Error al marcar la tarea como completada', detalle: error.message });
    }
};

module.exports = TareaController;