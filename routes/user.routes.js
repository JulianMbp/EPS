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

/**
 * Rutas
 */
router.get('/', ShowPacientes);
router.post('/', AddPacientes);
router.delete('/', DeletePacientes);
router.put('/', EditPacientes);
router.get('/:id', ShowPaciente);

module.exports = router;