const express = require('express');
const cors = require('cors'); // Instale com: npm install cors
const app = express();

app.use(cors()); // Isso permite que o GitHub acesse seu servidor local

let contador = 0;

app.get('/clique', (req, res) => {
    contador++;
    console.log(`Contador de cliques: ${contador}`);
    res.send({ status: "ok" });
});

app.listen(3001, () => console.log('Servidor 1 (Contador) rodando na porta 3000'));