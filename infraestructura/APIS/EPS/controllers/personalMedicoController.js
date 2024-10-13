/**
 * @author daferarte
 * @version 1.0.0
 * jhon ortiz
 * Controlador de usuario
 * Este archivo define los controladores de usuarios
 */

const {response, request} = require('express');

const ShowPersonalM = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar Personal"
    });
};

const AddPersonal = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de agregar personal"
    });
};

const ShowPersonal = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar personal"
    });
};

const EditPersonal = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar personal"
    });
};

const DeletePersonal = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar personal"
    });
};


module.exports = {
    AddPersonal,
    ShowPersonalM,
    ShowPersonal,
    EditPersonal,
    DeletePersonal
};