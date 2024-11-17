/**
 * @author Julian
 * @version 1.0.0
 * 
 * Rutas de usuario
 * Este archivo define las rutas de usuarios
 */
const {Router} = require('express');

const router= Router();

const {ShowFacturacion, Addfactura,DeleteFactura, EditFactura,ShowFactura} = require('../controllers/facturacion.controllers');

router.get('/', ShowFacturacion);
router.post('/', Addfactura);
router.delete('/:id', DeleteFactura);
router.put('/:id', EditFactura);
router.get('/:id', ShowFactura);


module.exports = router;