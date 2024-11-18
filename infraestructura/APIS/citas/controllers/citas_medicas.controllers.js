const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { response, request } = require('express');

// Ver todas las citas
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

    // Verificar que todos los campos requeridos estén presentes
    if (!paciente || !fecha || !hora || !motivo) {
        return res.status(400).json({
            message: "Faltan datos para programar la cita"
        });
    }

    try {
        // Asegúrate de que la fecha esté en el formato correcto (ISO 8601)
        const nuevaCita = await prisma.cita.create({
            data: {
                paciente,
                fecha: new Date(fecha),  // Convierte la fecha a formato Date
                hora,
                motivo,
                estado: "programada",
                medico: medico || null  // Si el médico no se proporciona, se deja como null
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

// Cancelar una cita
const cancelarCita = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const cita = await prisma.cita.update({
            where: { id: Number(id) }, // Asegúrate de que el ID sea numérico
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

// Reprogramar una cita
const reprogramarCita = async (req = request, res = response) => {
    const { id } = req.params;
    const { nuevaFecha, nuevaHora } = req.body;

    try {
        const cita = await prisma.cita.update({
            where: { id: Number(id) },
            data: {
                fecha: nuevaFecha ? new Date(nuevaFecha) : undefined, // Cambia la fecha si se proporciona
                hora: nuevaHora || undefined, // Cambia la hora si se proporciona
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

// Asignar un médico a una cita
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
