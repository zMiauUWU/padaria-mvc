# 🥖 Padaria MVC API

Este é um projeto de uma API simples para uma padaria, construída em **Node.js** com **Express**, seguindo a arquitetura **MVC (Model-View-Controller)**.

## 📦 Funcionalidades

- Cadastro de produtos por categoria: `frios`, `bebidas`, `panificação` e `confeitaria`.
- Listagem de todos os produtos cadastrados.
- Autenticação via **JWT** para proteger a rota de cadastro.
- Estrutura clara em pastas (Models, Routes, Controllers).

## 🔒 Autenticação

Para cadastrar produtos, é necessário estar autenticado.

### Login

**Rota:** `POST /login`  
**Body:**
```json
{
  "usuario": "admin",
  "senha": "123456"
}
