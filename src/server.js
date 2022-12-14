const { lista_servicos } = require('./servicos');
const { lista_produtos } = require('./produtos');

const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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