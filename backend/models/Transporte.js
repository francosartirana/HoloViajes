const mongoose = require('mongoose');

const transporteSchema = new mongoose.Schema({
    patente: String,
    nombreVehiculo: String,
    descripcionVehiculo: String,
    tipoTransporte: String,
});

module.exports = mongoose.model('Transporte', transporteSchema);