require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT_BACKEND || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola desde el backend');
});


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});

/*
let usuarioArray = [];
let idUsers = 1;
const usuarios = {
    nombre: '',
    apellido: '',
    documento: '',
    fechaNacimiento: '',
    telefono: '',
    email: '',
    password: '',
    direccion: '',
};

app.post('/usuarios', (req, res) => {
    const usuario = req.body;

    const faltantes = Object.keys(usuarios).filter(key => !usuario[key]);
    if (faltantes.length > 0) {
        return res.status(400).json({ message: `Faltan los siguientes campos: ${faltantes.join(', ')}` });
    } 
    usuarioArray.push({id: idUsers++, ...usuario});
    res.status(201).json(usuarioArray);
});

app.get('/usuarios', (req, res) => {
    res.json(usuarioArray);
});

app.get('/usuarios/:id', (req, res) => {
    const user = usuarioArray.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
});

app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idx = usuarioArray.findIndex(user => user.id === id);
    if (idx === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const editado = {...usuarioArray[idx], ...req.body};
    usuarioArray[idx] = editado;
    res.json(editado);
});

app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idx = usuarioArray.findIndex(user => user.id === id);
    if (idx === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const eliminado = usuarioArray.splice(idx, 1);
    res.json(eliminado);
});
*/


