const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { response, request } = require('express');

// Enviar una nueva encuesta
const enviarEncuesta = async (req = request, res = response) => {
    const { titulo, descripcion, preguntas } = req.body; // Asegúrate de enviar las preguntas al crear la encuesta
    try {
        // Crear la encuesta con las preguntas
        const nuevaEncuesta = await prisma.encuesta.create({
            data: {
                titulo,
                descripcion,
                preguntas: {
                    create: preguntas.map(pregunta => ({
                        texto: pregunta.texto,
                        tipo: pregunta.tipo, // Aquí pasas el tipo de pregunta
                        opciones: {
                            create: pregunta.opciones.map(opcion => ({
                                texto: opcion // Crear opciones asociadas a la pregunta
                            }))
                        }
                    }))
                }
            },
            include: {
                preguntas: {
                    include: {
                        opciones: true // Incluye las opciones al devolver las preguntas
                    }
                }
            }
        });
        res.json({
            message: "Encuesta enviada correctamente",
            data: nuevaEncuesta
        });
    } catch (error) {
        res.status(500).json({ error: "Error al enviar encuesta", details: error.message });
    }
};



// Registrar una respuesta para una encuesta
const registrarRespuesta = async (req = request, res = response) => {
    const { encuestaId, preguntaId, respuesta } = req.body; // Asegúrate de enviar el ID de la pregunta también
    try {
        // Registrar la respuesta asociada a una encuesta y pregunta específicas
        const nuevaRespuesta = await prisma.respuesta.create({
            data: {
                encuestaId: parseInt(encuestaId),
                preguntaId: parseInt(preguntaId), // Asocia la respuesta con una pregunta
                respuesta
            }
        });
        res.json({
            message: "Respuesta registrada correctamente",
            data: nuevaRespuesta
        });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar respuesta", details: error.message });
    }
};

// Obtener estadísticas de las respuestas de una encuesta
const obtenerEstadisticas = async (req = request, res = response) => {
    const { encuestaId } = req.params;
    try {
        // Obtener estadísticas de respuestas agrupadas por el tipo de respuesta
        const estadisticas = await prisma.respuesta.groupBy({
            by: ['respuesta'],
            where: { encuestaId: parseInt(encuestaId) },
            _count: {
                respuesta: true
            }
        });
        res.json({
            message: "Estadísticas de encuestas obtenidas correctamente",
            data: estadisticas
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener estadísticas de la encuesta", details: error.message });
    }
};

// Obtener las encuestas pendientes (completadas == false)
const obtenerEncuestasPendientes = async (req = request, res = response) => {
    try {
        const encuestasPendientes = await prisma.encuesta.findMany({
            where: { completada: false },
            include: {
                preguntas: true // Incluye las preguntas de las encuestas pendientes
            }
        });
        res.json({
            message: "Encuestas pendientes obtenidas correctamente",
            data: encuestasPendientes
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener encuestas pendientes", details: error.message });
    }
};

// Eliminar una encuesta por su ID
const eliminarEncuesta = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        // Primero eliminar las respuestas asociadas a la encuesta
        await prisma.respuesta.deleteMany({
            where: { encuestaId: parseInt(id) },
        });

        // Luego eliminar las preguntas asociadas a la encuesta
        await prisma.pregunta.deleteMany({
            where: { encuestaId: parseInt(id) },
        });

        // Finalmente, eliminar la encuesta
        await prisma.encuesta.delete({
            where: { id: parseInt(id) },
        });

        return res.json({
            message: "Encuesta eliminada correctamente",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error al eliminar la encuesta",
            details: error.message,
        });
    }
};


module.exports = {
    enviarEncuesta,
    registrarRespuesta,
    obtenerEstadisticas,
    obtenerEncuestasPendientes,
    eliminarEncuesta
};
