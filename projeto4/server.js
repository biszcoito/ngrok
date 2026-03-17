const express = require('express');
const app = express();

// Configura o servidor para entender JSON e servir a pasta 'public'
app.use(express.json());
app.use(express.static('public'));

// Rota que recebe o formulário final (score) dos alunos
app.post('/enviar-score', (req, res) => {
    const { nome, score, total } = req.body;

    // Printa o resultado bonito no seu terminal!
    console.log(`\n=================================`);
    console.log(`🎓 RESULTADO RECEBIDO!`);
    console.log(`👤 Aluno(a): ${nome}`);
    console.log(`⭐ Acertos:  ${score} de ${total}`);
    console.log(`=================================\n`);

    res.json({ mensagem: "Score recebido com sucesso!" });
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`✅ Servidor rodando na porta ${PORTA}`);
    console.log(`🌐 Para expor para os alunos, abra outro terminal e digite: ngrok http ${PORTA}`);
});