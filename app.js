import express from 'express';
import produtoRoutes from './routes/produtoRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

// Rota base
app.get('/', (req, res) => {
  res.send('Padaria rodando! 🍞');
});

// Rotas
app.use(authRoutes);        // rota de login
app.use(produtoRoutes);     // rota de produtos

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
