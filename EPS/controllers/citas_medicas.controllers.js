const { response, request } = require('express');


const verCitas = async (req, request, res = response) => {
    res.json({
        "message": "Listado de citas"
    });
};

const programarCita = async (req = request, res = response) => {
    res.json({
        "message": "Cita programada correctamente"
    });
};

const cancelarCita = async (req = request, res = response) => {
    res.json({
        "message": "Cita cancelada correctamente"
    });
};

const reprogramarCita = async (req = request, res = response) => {
    res.json({
        "message": "Cita reprogramada correctamente"
    });
};

const asignarMedico = async (req = request, res = response) => {
    res.json({
        "message": "Médico asignado correctamente"
    });
};



module.exports = {
    verCitas,
    programarCita,
    cancelarCita,
    reprogramarCita,
    asignarMedico,

   
};
