const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();

app.use('/', router.get('/', (req, res) => {
    res.status(200).send('Hello World!');
}))

app.use('/', router.get('/sobre', (req, res) => {
    res.status(200).send({
        "nome": "API-CHAT",
        "versao": "1.0.0",
        "autor": "Pedro Henrique Pohlmann de Oliveira"
    })    
}));

app.use('/salas', router.get('/salas', async (req, res) => {
    const salaController = require('./controllers/salaController');
    const resp = await salaController.get();
    res.status(200).send(resp);
}));
module.exports = app;