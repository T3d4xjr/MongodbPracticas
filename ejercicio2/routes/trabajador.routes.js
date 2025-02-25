const express = require('express');
const TrabajadorController = require('../controllers/trabajador.controller');

const router = express.Router();

router.post('/', TrabajadorController.crearTrabajador);
router.put('/:id', TrabajadorController.modificarTrabajador);
router.get('/', TrabajadorController.listarTrabajadores);
router.get('/:id', TrabajadorController.obtenerTrabajadorPorId);

module.exports = router;
