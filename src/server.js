const PORT = process.env.PORT || 5000; // const PORT = process.env.PORT || 8000 // this is for deploying heroku
const express = require("express");
const app = express();


servicos = [
    {
        "categoria":"Unha",
        "servicos":[
            {
                "nome":"Espaço Vida e Beleza",
                "imagem":"imgs/unha001.jpg",
                "valor": "R$ 35,00"
            },
            {
                "nome":"Salão Impactus",
                "imagem":"imgs/unha002.jpg",
                "valor": "R$ 42,00"
            }                        
        ]
    },
    {
        "categoria":"Sobrancelhas",
        "servicos":[
            {
                "nome":"Amanda Esteticista",
                "imagem":"imgs/unha002.jpg",
                "valor": "R$ 27,00"
            },
            {
                "nome":"Exemplo Brinquedo 4",
                "imagem":"imgs/unha002.jpg",
                "valor": "R$ 10,00"
            }                        
        ]
    },
    {
        "categoria":"Cabelo",
        "servicos":[
            {
                "nome":"Salão da Jualiana",
                "imagem":"imgs/unha002.jpg",
                "valor": "R$ 150,00"
            },
            {
                "nome":"Marta Cabeleireira",
                "imagem":"imgs/unha002.jpg",
                "valor": "R$ 120,00"
            }                        
        ]
    },
	{
        "categoria":"Cabelo",
        "servicos":[
            {
                "nome":"Exemplo Brinquedo 5",
                "imagem":"imgs/unha002.jpg",
                "valor": "R$ 150,00"
            },
            {
                "nome":"Exemplo Brinquedo 6",
                "imagem":"imgs/unha002.jpg",
                "valor": "R$ 120,00"
            }                        
        ]
    },
    {
        "categoria":"Maquiagem",
        "servicos":[
                       
        ]
    }          
]

app.get("/", (request, response) => {
    response.send('<span style="color: #ff00;">Api Beauty Finder</span>');
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

app.get('/servicos', (req, res) => {
    res.json(servicos);
});

// async function getServicos(){
//     const servicos = await fetch("dados/servicos.json");
//     return servicos;
// }