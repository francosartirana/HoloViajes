const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombreUsuario: {type: String, required: true},
    apellidoUsuario: {type: String, required: true},
    documento: {
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                // La expresión regular valida que el documento:
                // ^ - Inicio de la cadena
                // \d{7,8} - Exactamente 7 u 8 dígitos numéricos
                // $ - Fin de la cadena
                return /^\d{7,8}$/.test(v);
            },
            message: 'El documento debe tener 7 u 8 dígitos numéricos'
        }
    },  
    fechaNacimiento: {type: Date, required: true},
    telefono: {
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                // La expresión regular valida que el teléfono:
                // ^ - Inicio de la cadena
                // \d{10} - Exactamente 10 dígitos numéricos
                // $ - Fin de la cadena
                return /^\d{10}$/.test(v);
            },
            message: 'El teléfono debe tener 10 dígitos numéricos'
        }
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                // La expresión regular valida que el email:
                // ^ - Inicio de la cadena
                // [^\s@]+ - Uno o más caracteres que no sean espacios ni @
                // @ - El símbolo @
                // [^\s@]+ - Uno o más caracteres que no sean espacios ni @
                // \. - Un punto literal
                // [^\s@]+ - Uno o más caracteres que no sean espacios ni @
                // $ - Fin de la cadena
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'El email debe tener un formato válido'
        }
    },
    password: {
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                // La expresión regular valida que la contraseña:
                // ^ - Inicio de la cadena
                // (?=.*[a-z]) - Al menos una letra minúscula
                // (?=.*[A-Z]) - Al menos una letra mayúscula
                // (?=.*\d) - Al menos un dígito numérico
                // [a-zA-Z\d\-_@#$%^&+=]{8,} - Mínimo 8 caracteres alfanuméricos y caracteres especiales permitidos
                // $ - Fin de la cadena
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\-_@#$%^&+=]{8,}$/.test(v);
            },
            message: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y puede incluir caracteres especiales'
        }
    },
    direccion: {type: String, required: true},
    administrador: {type: Boolean, required: true}
});

module.exports = mongoose.model('Usuario', usuarioSchema);