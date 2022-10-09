const servicos = require('./servicos');
const produtos = require('./produtos');

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
    const result = [servicos.lista_servicos];
    res.json(result);
});

app.get('/produtos', (req, res) => {
    res.json(produtos.lista_produtos);
});