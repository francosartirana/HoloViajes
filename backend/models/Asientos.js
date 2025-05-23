const mongoose = require('mongoose');

const asientosSchema = new mongoose.Schema({
    transporte: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transporte',
    },
    cantidadAsientos: Number,
    estado: String,
});

module.exports = mongoose.model('Asientos', asientosSchema);
