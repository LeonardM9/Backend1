const express = require('express');
const router = express.Router();
const citaController = require('../controllers/cita.controller');
const auth = require('../middlewares/auth');

// Agendar cita
router.post('/agendar', auth, citaController.agendarCita);
// Obtener citas del usuario autenticado
router.get('/', auth, citaController.obtenerCitas);

module.exports = router; 