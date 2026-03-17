const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/enviar-score', (req, res) => {
    const { nome, score, total } = req.body;

    if (!nome || typeof score !== 'number' || typeof total !== 'number') {
        return res.status(400).json({ erro: "Dados inválidos" });
    }

    console.log(`\n=================================`);
    console.log(`🎓 RESULTADO RECEBIDO!`);
    console.log(`👤 Aluno(a): ${nome}`);
    console.log(`⭐ Acertos:  ${score} de ${total}`);
    console.log(`=================================\n`);

    res.json({ mensagem: "Score recebido com sucesso!" });
});

const PORTA = 3001;

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});