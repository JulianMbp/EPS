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
const {ShowFarm} = require('../controllers/farmacia.controllers')

/**
 * Rutas
 */
router.get('/', ShowFarm);

module.exports = router;