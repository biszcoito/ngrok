const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let mural = [];

app.get('/send', (req, res) => {
    const { user, msg } = req.query;
    if(user && msg) mural.push({ user, msg });
    res.send({ ok: true });
});

app.get('/mensagens', (req, res) => {
    res.json(mural); 
});

app.listen(3001, () => console.log('Servidor 3 (Mural) na porta 3001'));