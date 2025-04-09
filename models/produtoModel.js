// models/produtoModel.js

const produtos = [];
let proximoId = 1;

const categoriasPermitidas = ['frios', 'bebidas', 'panificação', 'confeitaria'];

export const adicionarProduto = (produto) => {
  const { nome, preco, categoria } = produto;

  if (!nome || !preco || !categoria) {
    throw new Error('Nome, preço e categoria são obrigatórios.');
  }

  if (!categoriasPermitidas.includes(categoria)) {
    throw new Error(`Categoria inválida. Use: ${categoriasPermitidas.join(', ')}`);
  }

  const novoProduto = {
    id: proximoId++, // Gera ID único sequencial
    nome,
    preco,
    categoria
  };

  produtos.push(novoProduto);
  return novoProduto;
};

export const listarProdutos = () => {
  return produtos;
};

export const buscarProdutoPorId = (id) => {
  return produtos.find(p => p.id === id);
};

export const atualizarProduto = (id, dados) => {
  const produto = buscarProdutoPorId(id);
  if (!produto) throw new Error('Produto não encontrado.');

  const { nome, preco, categoria } = dados;

  if (!nome || !preco || !categoria) {
    throw new Error('Nome, preço e categoria são obrigatórios.');
  }

  produto.nome = nome;
  produto.preco = preco;
  produto.categoria = categoria;

  return produto;
};

export const deletarProduto = (id) => {
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) throw new Error('Produto não encontrado.');
  produtos.splice(index, 1);
};
