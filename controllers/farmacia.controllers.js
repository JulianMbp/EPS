/**
 * @author Julian
 * @version 1.0.0
 *
 * Controlador de farmacia
 * Este archivo define los controladores del 
 * inventario de la farmacia
 */
const {response, request} = require('express');

const ShowMedicamentos = async(req=request, res=response)=>{

    const medicamento = await prisma.medicamento.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        medicamento
    });
};
const AddMedicamento = async(req=request, res=response)=>{

    const {
        Totanombre_medicamento,
        descripcion,
        cantidad_disponible,
        laboratorio,
        fecha_vencimiento,
        precio
    } = req.body;

    const result = await prisma.medicamento.create({
        data: {
            Totanombre_medicamento,
            descripcion,
            cantidad_disponible,
            laboratorio,
            fecha_vencimiento,
            precio
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
const EditMedicamento = async(req=request, res=response)=>{
    const { id } = req.params;

    const {Totanombre_medicamento,
            descripcion,
            cantidad_disponible,
            laboratorio,
            fecha_vencimiento,
            precio } = req.body;

    const result = await prisma.medicamento.update({
        where:{
            id: Number(id)
        },
        data: {
            Totanombre_medicamento,
            descripcion,
            cantidad_disponible,
            laboratorio,
            fecha_vencimiento,
            precio
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

const DeleteMedicamento = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.medicamento.delete({
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
    AddMedicamento,
    ShowMedicamentos,
    EditMedicamento,
    DeleteMedicamento
}