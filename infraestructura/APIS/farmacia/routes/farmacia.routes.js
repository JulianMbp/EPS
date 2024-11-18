/**
 * @author Julian
 * @version 1.0.0
 *
 * Rutas de Farmacia
 * Este archivo define las rutas para gestionar
 * el inventario de medicamentos en la farmacia.
 */

const { Router } = require('express');
const { AddMedicamento, ShowMedicamentos, EditMedicamento, DeleteMedicamento } = require('../controllers/farmacia.controllers');

const router = Router();

// Ruta para mostrar todos los medicamentos
router.get('/', ShowMedicamentos);

// Ruta para agregar un nuevo medicamento
router.post('/add', AddMedicamento);

// Ruta para editar un medicamento existente
router.put('/edit/:id', EditMedicamento);

// Ruta para eliminar un medicamento
router.delete('/delete/:id', DeleteMedicamento);

module.exports = router;
