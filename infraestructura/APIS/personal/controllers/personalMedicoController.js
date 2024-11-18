const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const ShowPersonalM = async (req = request, res = response) => {
    try {
        const personalMedico = await prisma.personalMedico.findMany();
        res.json({ personalMedico });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener personal médico' });
    }
};


const AddPersonal = async (req = request, res = response) => {
    const { nombre, apellido, especialidad, telefono, direccion, email } = req.body;

    try {
        const personal = await prisma.personalMedico.create({
            data: {
                nombre,
                apellido,
                especialidad,
                telefono,
                direccion,
                email,
            },
        });
        res.status(201).json({ message: 'Personal médico agregado correctamente', personal });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar personal médico' });
    }
};


const ShowPersonal = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const personal = await prisma.personalMedico.findUnique({
            where: { id: parseInt(id) },
        });

        if (!personal) {
            return res.status(404).json({ error: 'Personal médico no encontrado' });
        }

        res.json({ personal });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el personal médico' });
    }
};


const EditPersonal = async (req = request, res = response) => {
    const { id } = req.params;
    const { nombre, apellido, especialidad, telefono, direccion, email } = req.body;

    try {
        const personal = await prisma.personalMedico.update({
            where: { id: parseInt(id) },
            data: {
                nombre,
                apellido,
                especialidad,
                telefono,
                direccion,
                email,
            },
        });
        res.json({ message: 'Personal médico actualizado correctamente', personal });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar personal médico' });
    }
};


const DeletePersonal = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const personal = await prisma.personalMedico.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Personal médico eliminado correctamente', personal });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar personal médico' });
    }
};

module.exports = {
    AddPersonal,
    ShowPersonalM,
    ShowPersonal,
    EditPersonal,
    DeletePersonal,
};
