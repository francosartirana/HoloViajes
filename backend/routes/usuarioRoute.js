const Usuario = require('../models/Usuario');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { nombreUsuario, apellidoUsuario, documento, fechaNacimiento, telefono, email, password, direccion, administrador } = req.body;
        
        // Verificar si el email ya existe
        const emailExistente = await Usuario.findOne({ email });
        if (emailExistente) {
            return res.status(400).json({ mensaje: 'El email ya está registrado' });
        }

        // Verificar si el documento ya existe
        const documentoExistente = await Usuario.findOne({ documento });
        if (documentoExistente) {
            return res.status(400).json({ mensaje: 'El documento ya está registrado' });
        }

        // Verificar si el teléfono ya existe
        const telefonoExistente = await Usuario.findOne({ telefono });
        if (telefonoExistente) {
            return res.status(400).json({ mensaje: 'El teléfono ya está registrado' });
        }

        const usuario = new Usuario({ 
            nombreUsuario, 
            apellidoUsuario, 
            documento, 
            fechaNacimiento, 
            telefono, 
            email, 
            password, 
            direccion, 
            administrador 
        });

        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errores = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ mensaje: 'Error de validación', errores });
        }
        if (error.code === 11000) {
            // Determinar qué campo causó el error de duplicación
            const campoDuplicado = Object.keys(error.keyPattern)[0];
            return res.status(400).json({ 
                mensaje: `El ${campoDuplicado} ya está en uso` 
            });
        }
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});

router.get('/', async (req, res) => {
    const usuarios = await Usuario.find();
    if (!usuarios) {
        return res.status(404).json({ message: 'No hay usuarios para mostrar' });
    }
    res.json(usuarios);
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el usuario', error });
    }
});

router.put('/:id', async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    Object.keys(req.body).forEach(campo => {
        if (req.body[campo] !== undefined) {
            usuario[campo] = req.body[campo];
        }
    });
        
    await usuario.save();
    res.json(usuario);
});

router.delete ('/:id', async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await Usuario.deleteOne({ _id: req.params.id });
    res.json({ message: 'Usuario eliminado correctamente' });
});

module.exports = router;

