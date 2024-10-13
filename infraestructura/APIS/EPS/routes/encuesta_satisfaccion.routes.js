const { Router } = require('express');
const { enviarEncuesta, registrarRespuesta, obtenerEstadisticas, obtenerEncuestasPendientes, eliminarEncuesta } = require('../controllers/encuesta_satisfaccion.controllers');

const router = Router();


router.post('/enviar', enviarEncuesta);
router.post('/respuesta', registrarRespuesta);
router.get('/estadisticas', obtenerEstadisticas);
router.get('/pendientes', obtenerEncuestasPendientes);
router.delete('/eliminar', eliminarEncuesta);

module.exports = router;
