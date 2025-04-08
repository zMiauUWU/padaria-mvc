// routes/authRoutes.js
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { usuario } from '../auth/usuario.js';

const router = express.Router();
const chaveSecreta = 'chave_super_secreta'; // idealmente, coloca isso num .env

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== usuario.username) {
    return res.status(401).json({ erro: 'Usuário inválido' });
  }

  const senhaValida = bcrypt.compareSync(password, usuario.password);
  if (!senhaValida) {
    return res.status(401).json({ erro: 'Senha inválida' });
  }

  const token = jwt.sign({ id: usuario.id }, chaveSecreta, {
    expiresIn: '1h'
  });

  res.json({ auth: true, token });
});

export default router;
export { chaveSecreta };
