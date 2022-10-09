const PORT = process.env.PORT || 5000; // const PORT = process.env.PORT || 8000 // this is for deploying heroku
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send('<span style="color: #ff00;">Api Beauty Finder</span>');
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

app.get('/servicos', (req, res) => {
    res.json(getServicos());
});

async function getServicos(){
    const servicos = await fetch("servicos.json");
    return servicos;
}