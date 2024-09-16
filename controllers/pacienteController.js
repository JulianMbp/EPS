/**
 * @author daferarte
 * @version 1.0.0
 * jhon ortiz
 * Controlador de usuario
 * Este archivo define los controladores de usuarios
 */

const {response, request} = require('express');

const ShowPacientes = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar pacientes"
    });
};

const AddPacientes = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de agregar pacientes"
    });
};

const ShowPaciente = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar pacientes"
    });
};

const EditPacientes = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar pacientes"
    });
};

const DeletePacientes = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar pacientes"
    });
};


module.exports = {
    AddPacientes,
    ShowPacientes,
    ShowPaciente,
    EditPacientes,
    DeletePacientes
};