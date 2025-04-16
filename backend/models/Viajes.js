const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    precioViaje: Number,
    fechaSalida: Date,
    fechaLlegada: Date,
    estado: String,
    cantidadPasajeros: Number,
    tipoPasajero: String,
});

module.exports = mongoose.model('Viaje', viajeSchema);