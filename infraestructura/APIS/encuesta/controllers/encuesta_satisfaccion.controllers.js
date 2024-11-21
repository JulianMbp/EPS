const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { response, request } = require('express');


const enviarEncuesta = async (req = request, res = response) => {
    const { titulo, descripcion, preguntas } = req.body; 
    try {
     
        const nuevaEncuesta = await prisma.encuesta.create({
            data: {
                titulo,
                descripcion,
                preguntas: {
                    create: preguntas.map(pregunta => ({
                        texto: pregunta.texto,
                        tipo: pregunta.tipo, 
                        opciones: {
                            create: pregunta.opciones.map(opcion => ({
                                texto: opcion 
                            }))
                        }
                    }))
                }
            },
            include: {
                preguntas: {
                    include: {
                        opciones: true 
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




const registrarRespuesta = async (req = request, res = response) => {
    const { encuestaId, preguntaId, respuesta } = req.body; 
    try {
   
        const nuevaRespuesta = await prisma.respuesta.create({
            data: {
                encuestaId: parseInt(encuestaId),
                preguntaId: parseInt(preguntaId),
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


const obtenerEstadisticas = async (req = request, res = response) => {
    const { encuestaId } = req.params;
    try {
       
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


const obtenerEncuestasPendientes = async (req = request, res = response) => {
    try {
        const encuestasPendientes = await prisma.encuesta.findMany({
            where: { completada: false },
            include: {
                preguntas: true 
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


const eliminarEncuesta = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        
        await prisma.respuesta.deleteMany({
            where: { encuestaId: parseInt(id) },
        });

       
        await prisma.pregunta.deleteMany({
            where: { encuestaId: parseInt(id) },
        });

       
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
