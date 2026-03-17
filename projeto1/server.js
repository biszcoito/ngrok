const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors()); 

let contador = 0;

app.get('/clique', (req, res) => {
    contador++;
    console.log(`Contador de cliques: ${contador}`);
    res.send({ status: "ok" });
});

app.listen(3001, () => console.log('Servidor 1 (Contador) rodando na porta 3000'));