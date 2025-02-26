const express = require('express');
const TareaController = require('../controllers/tarea.controller');

const router = express.Router();

router.post('/:id/tareas', TareaController.crearTarea);
router.put('/:id/tareas/:idTarea', TareaController.modificarTarea);
router.get('/:id/tareas', TareaController.listarTareasDeTrabajador);
router.get('/:id/tareas/estado/:estado', TareaController.listarTareasPorEstado);
router.get('/:id/tareas/:idTarea', TareaController.obtenerTareaPorId);
router.put('/:id/tareas/:idTarea/completar', TareaController.marcarTareaCompletada);

module.exports = router;
    