import express from 'express';

const app = express();
const port = 3000;

// Permitir receber JSON no body das requisições
app.use(express.json());

// Rota base de teste
app.get('/', (req, res) => {
  res.send('Padaria rodando! 🍞');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
