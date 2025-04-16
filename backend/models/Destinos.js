const mongoose = require('mongoose');

const destinoSchema = new mongoose.Schema({
    nombreDestino: String,
    descripcionDestino: String,
    tipoDestino: String,
});

module.exports = mongoose.model('Destino', destinoSchema);