/**
 * @author Julian
 * @version 1.0.0
 * 
 * Controlador de Facturacion
 * Este archivo define los controladores de facturacion
 */

const {response, request} = require('express');

const ShowFacturacion = async(req=request, res=response)=>{
    res.json({
        "factura":"imprimiendo factura"
    });
};