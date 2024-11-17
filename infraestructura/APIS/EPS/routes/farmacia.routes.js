/**
 * @author Julian
 * @version 1.0.0
 * 
 * Rutas de usuario
 * Este archivo define las rutas de usuarios
 */
const {Router} = require('express');

const router = Router();

/**
 * Metodos importados
 */
const {ShowFarm, AddMedicamento,DeleteMedicamento,EditMedicamento,ShowMedicamentos} = require('../controllers/farmacia.controllers')

/**
 * Rutas
 */
router.get('/', ShowFarm);
router.post('/', AddMedicamento);
router.delete('/:id', DeleteMedicamento);
router.put('/:id', EditMedicamento);
router.get('/:id', ShowMedicamentos);

module.exports = router;