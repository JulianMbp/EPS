const { response, request } = require('express');


const enviarEncuesta = async (req = request, res = response) => {

    res.json({
        "message": "Encuesta enviada correctamente"
    });
};


const registrarRespuesta = async (req = request, res = response) => {
 
    res.json({
        "message": "Respuesta registrada correctamente"
    });
};


const obtenerEstadisticas = async (req = request, res = response) => {
    
    res.json({
        "message": "Estadísticas de encuestas obtenidas correctamente"
    });
};


const obtenerEncuestasPendientes = async (req = request, res = response) => {
  
    res.json({
        "message": "Encuestas pendientes obtenidas correctamente"
    });
};


const eliminarEncuesta = async (req = request, res = response) => {

    res.json({
        "message": "Encuesta eliminada correctamente"
    });
};

module.exports = {
    enviarEncuesta,
    registrarRespuesta,
    obtenerEstadisticas,
    obtenerEncuestasPendientes,
    eliminarEncuesta
};