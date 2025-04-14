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
    console.log(`Servidor corriendo en el puerto ${port}`);
});


