const { Router } = require('express');
const { verCitas, programarCita, cancelarCita, reprogramarCita, asignarMedico,  } = require('../controllers/citas_medicas.controllers');

const router = Router();


router.get('/ver', verCitas);
router.post('/programar', programarCita);
router.delete('/cancelar/:id', cancelarCita);
router.put('/reprogramar/:id', reprogramarCita);
router.put('/asignar-medico/:id', asignarMedico);



module.exports = router;
