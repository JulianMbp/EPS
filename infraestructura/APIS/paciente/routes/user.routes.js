const {Router} = require('express');
const {ShowPacientes,AddPacientes,DeletePacientes,EditPacientes,ShowPaciente} = require('../controllers/pacienteController');

const router= Router();

router.get('/', ShowPacientes);
router.post('/', AddPacientes);
router.delete('/:id', DeletePacientes);
router.put('/:id', EditPacientes);
router.get('/:id', ShowPaciente);




module.exports = router;