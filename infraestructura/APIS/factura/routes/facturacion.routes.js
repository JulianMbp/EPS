/**
 * @author Julian
 * @version 1.0.0
 *
 * Rutas de Facturación
 * Este archivo define las rutas de facturación.
 */

const { Router } = require('express');
const { Addfactura, ShowFactura, EditFactura, DeleteFactura } = require('../controllers/facturacion.controllers');

const router = Router();

// Ruta para mostrar todas las facturas
router.get('/', ShowFactura);

// Ruta para agregar una nueva factura
router.post('/add', Addfactura);

// Ruta para editar una factura existente
router.put('/edit/:id', EditFactura);

// Ruta para eliminar una factura
router.delete('/delete/:id', DeleteFactura);

module.exports = router;
