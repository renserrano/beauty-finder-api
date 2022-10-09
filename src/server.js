// const {lista_servicos} = require('./servicos');
// const produtos = require('./produtos');
//const {Student} = require('./module1.js');
const { lista_servicos } = require('./servicos');

const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send('<span style="color: #ff00;">Welcome Api Beauty Finder</span>');
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

app.get('/servicos', (req, res) => {
    res.json(lista_servicos);
});

app.get('/produtos', (req, res) => {
    res.json(lista_produtos);
});