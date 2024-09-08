/**
 * @author daferarte
 * @version 1.0.0
 * 
 * Rutas de usuario
 * Este archivo define las rutas de usuarios
 */

const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const {ShowPacientes,AddPacientes,DeletePacientes,EditPacientes,ShowPaciente} = require('../controllers/pacienteController');
const {ShowPersonalM,AddPersonal,DeletePersonal,EditPersonal,ShowPersonal} = require('../controllers/personalMedicoController');

/**
 * Rutas
 */
//pacientes
router.get('/', ShowPacientes);
router.post('/', AddPacientes);
router.delete('/', DeletePacientes);
router.put('/', EditPacientes);
router.get('/:id', ShowPaciente);

//personalMedico

router.get('/', ShowPersonalM);
router.post('/', AddPersonal);
router.delete('/', DeletePersonal);
router.put('/', EditPersonal);
router.get('/:id', ShowPersonal);



module.exports = router;