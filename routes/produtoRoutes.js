import express from 'express';
import {
  adicionarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto
} from '../models/produtoModel.js';

const router = express.Router();

// POST /produtos
router.post('/produtos', (req, res) => {
  const { nome, preco, categoria } = req.body;

  if (!nome || !preco || !categoria) {
    return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos.' });
  }

  const novoProduto = adicionarProduto({ nome, preco, categoria });
  res.status(201).json(novoProduto);
});

// GET /produtos
router.get('/produtos', (req, res) => {
  const produtos = listarProdutos();
  res.json(produtos);
});

// GET /produtos/:id
router.get('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = buscarProdutoPorId(id);

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado.' });
  }

  res.json(produto);
});

// PUT /produtos/:id
router.put('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, preco, categoria } = req.body;

  try {
    const produtoAtualizado = atualizarProduto(id, { nome, preco, categoria });
    res.json(produtoAtualizado);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// DELETE /produtos/:id
router.delete('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  try {
    deletarProduto(id);
    res.json({ mensagem: 'Produto deletado com sucesso.' });
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
});

export default router
