const { Router } = require('express');
const { verCitas, programarCita, cancelarCita, reprogramarCita, asignarMedico,  } = require('../controllers/citas_medicas.controllers');

const router = Router();

router.get('/ver',verCitas);
router.post('/programar', programarCita);
router.delete('/cancelar', cancelarCita);
router.put('/reprogramar', reprogramarCita);
router.post('/asignar-medico', asignarMedico);



module.exports = router;
