/**
 * @author Julian
 * @version 1.0.0
 *
 * Controlador de Facturacion
 * Este archivo define los controladores de facturacion
 */

const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowFactura = async(req=request, res=response)=>{

    const factura = await prisma.factura.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        factura
    });
};

const Addfactura = async(req=request, res=response)=>{

    const { fecha_factura,
        Total_factura,
        forma_pago,
        descuento,
        Eps_cubre } = req.body;

    const result = await prisma.factura.create({
        data: {
            fecha_factura,
            Total_factura,
            forma_pago,
            descuento,
            Eps_cubre
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};

const EditFactura = async(req=request, res=response)=>{
    const { id } = req.params;

    const { fecha_factura,
        Total_factura,
        forma_pago,
        descuento,
        Eps_cubre } = req.body;

    const result = await prisma.factura.update({
        where:{
            id: Number(id)
        },
        data: {
            fecha_factura,
            Total_factura,
            forma_pago,
            descuento,
            Eps_cubre
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};

const DeleteFactura = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.factura.delete({
        where:{
            id: Number(id)
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};

module.exports = {
    Addfactura,
    ShowFactura,
    EditFactura,
    DeleteFactura
}