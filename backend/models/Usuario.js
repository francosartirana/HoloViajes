const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombreUsuario: String,
    apellidoUsuario: String,
    documento: String,  
    fechaNacimiento: Date,
    telefono: String,
    email: String,
    password: String,
    direccion: String,
    administrador: Boolean,
});

module.exports = mongoose.model('Usuario', usuarioSchema);