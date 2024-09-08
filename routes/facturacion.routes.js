/**
 * @author Julian
 * @version 1.0.0
 * 
 * Rutas de usuario
 * Este archivo define las rutas de usuarios
 */
const {Router} = require('express');

const router= Router();

const {ShowFacturacion} = require('../controllers/facturacion.controllers');

router.get('/', ShowFacturacion);

module.exports = router;