const express = require('express');
const TareaController = require('../controllers/tarea.controller');

const router = express.Router();

router.post('/', TareaController.crearTarea);
router.put('/:id', TareaController.modificarTarea);
router.get('/trabajador/:trabajadorId', TareaController.listarTareasDeTrabajador);
router.get('/trabajador/:trabajadorId/estado', TareaController.listarTareasPorEstado);
router.get('/:id', TareaController.obtenerTareaPorId);
router.put('/:id/completar', TareaController.marcarTareaCompletada);

module.exports = router;
