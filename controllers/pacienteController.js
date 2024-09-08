/**
 * @author daferarte
 * @version 1.0.0
 * 
 * Controlador de usuario
 * Este archivo define los controladores de usuarios
 */

const {response, request} = require('express');

const ShowPacientes = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const AddPacientes = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de agregar usuarios"
    });
};

const ShowPaciente = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditPacientes = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const DeletePacientes = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};


module.exports = {
    AddPacientes,
    ShowPacientes,
    ShowPaciente,
    EditPacientes,
    DeletePacientes
};