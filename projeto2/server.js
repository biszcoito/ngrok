const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let nomes = [];

app.get('/add', (req, res) => {
    const nome = req.query.nome;
    if (nome) {
        nomes.push(nome);
        console.log(nomes)
    }
    res.send({ status: "recebido" });
});

app.listen(3001, () => console.log('Servidor 2 (Escada) na porta 3001'));