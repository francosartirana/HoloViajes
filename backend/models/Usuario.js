const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombreUsuario: {type: String, required: true},
    apellidoUsuario: {type: String, required: true},
    documento: {type: String, required: true},  
    fechaNacimiento: {type: Date, required: true},
    telefono: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    direccion: {type: String, required: true},
    administrador: {type: Boolean, required: true}  ,
});

module.exports = mongoose.model('Usuario', usuarioSchema);