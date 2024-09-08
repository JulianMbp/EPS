/**
 * @author Julian
 * @version 1.0.0
 * 
 * Controlador de farmacia
 * Este archivo define los controladores del 
 * inventario de la farmacia
 */
const {response, request} = require('express');

const ShowFarm = async(req=request, res=response)=>{
    res.json(
        {
            "pedido":"aqui esta su pedido"
        }
    )
}
