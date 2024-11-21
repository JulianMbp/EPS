const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const ShowPacientes = async (req = request, res = response) => {
    try {
        const pacientes = await prisma.paciente.findMany();
        res.json({ pacientes });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pacientes' });
    }
};


const AddPacientes = async (req = request, res = response) => {
    const { nombre, apellido, fecha_nac, telefono, direccion, email } = req.body;
    
    try {
        const paciente = await prisma.paciente.create({
            data: {
                nombre,
                apellido,
                fecha_nac,
                telefono,
                direccion,
                email,
            },
        });
        res.status(201).json({ message: 'Paciente agregado correctamente', paciente });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar paciente' });
    }
};


const ShowPaciente = async (req = request, res = response) => {
    const { id } = req.params;
    
    try {
        const paciente = await prisma.paciente.findUnique({
            where: { id: parseInt(id) },
        });
        
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }
        
        res.json({ paciente });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener paciente' });
    }
};


const EditPacientes = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombre, apellido, fecha_nac, telefono, direccion, email } = req.body;
    
    try {
        const paciente = await prisma.paciente.update({
            where: { id: parseInt(id) },
            data: {
                nombre,
                apellido,
                fecha_nac,
                telefono,
                direccion,
                email,
            },
        });
        res.json({ message: 'Paciente actualizado correctamente', paciente });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar paciente' });
    }
};


const DeletePacientes = async (req = request, res = response) => {
    const { id } = req.params;
    
    try {
        const paciente = await prisma.paciente.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Paciente eliminado correctamente', paciente });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar paciente' });
    }
};

module.exports = {
    AddPacientes,
    ShowPacientes,
    ShowPaciente,
    EditPacientes,
    DeletePacientes,
};
