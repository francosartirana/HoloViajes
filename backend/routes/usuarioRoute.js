const Usuario = require('../models/Usuario');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { nombreUsuario, apellidoUsuario, documento, fechaNacimiento, telefono, email, password, direccion, administrador } = req.body;
        const usuario = new Usuario({ nombreUsuario, apellidoUsuario, documento, fechaNacimiento, telefono, email, password, direccion, administrador });
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errores = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ mensaje: 'Error de validación', errores });
          }
          if (error.code === 11000) {
            return res.status(400).json({ mensaje: 'El email ya está en uso' });
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

