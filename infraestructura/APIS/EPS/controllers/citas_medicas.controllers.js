const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { response, request } = require('express');


const verCitas = async (req = request, res = response) => {
    try {
        const citas = await prisma.cita.findMany();
        res.json({
            message: "Listado de citas",
            data: citas
        });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las citas", error });
    }
};

const programarCita = async (req = request, res = response) => {
    const { paciente, fecha, hora, motivo, medico } = req.body;


    if (!paciente || !fecha || !hora || !motivo) {
        return res.status(400).json({
            message: "Faltan datos para programar la cita"
        });
    }

    try {
       
        const nuevaCita = await prisma.cita.create({
            data: {
                paciente,
                fecha: new Date(fecha),  
                hora,
                motivo,
                estado: "programada",
                medico: medico || null 
            }
        });

        res.status(201).json({
            message: "Cita programada correctamente",
            data: nuevaCita
        });
    } catch (error) {
        res.status(500).json({ message: "Error al programar la cita", error });
    }
};


const cancelarCita = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const cita = await prisma.cita.update({
            where: { id: Number(id) },
            data: { estado: "cancelada" }
        });

        res.json({
            message: "Cita cancelada correctamente",
            data: cita
        });
    } catch (error) {
        res.status(404).json({ message: "Cita no encontrada o error al cancelar", error });
    }
};


const reprogramarCita = async (req = request, res = response) => {
    const { id } = req.params;
    const { nuevaFecha, nuevaHora } = req.body;

    try {
        const cita = await prisma.cita.update({
            where: { id: Number(id) },
            data: {
                fecha: nuevaFecha ? new Date(nuevaFecha) : undefined, 
                hora: nuevaHora || undefined,
                estado: "reprogramada"
            }
        });

        res.json({
            message: "Cita reprogramada correctamente",
            data: cita
        });
    } catch (error) {
        res.status(404).json({ message: "Cita no encontrada o error al reprogramar", error });
    }
};


const asignarMedico = async (req = request, res = response) => {
    const { id } = req.params;
    const { medico } = req.body;

    if (!medico) {
        return res.status(400).json({
            message: "Especifica un médico para asignar a la cita"
        });
    }

    try {
        const cita = await prisma.cita.update({
            where: { id: Number(id) },
            data: { medico, estado: "medico asignado" }
        });

        res.json({
            message: "Médico asignado correctamente",
            data: cita
        });
    } catch (error) {
        res.status(404).json({ message: "Cita no encontrada o error al asignar médico", error });
    }
};

module.exports = {
    verCitas,
    programarCita,
    cancelarCita,
    reprogramarCita,
    asignarMedico,
};
