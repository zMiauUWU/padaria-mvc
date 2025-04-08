// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import { chaveSecreta } from '../routes/authRoutes.js';

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ erro: 'Token não fornecido' });

  jwt.verify(token.replace('Bearer ', ''), chaveSecreta, (err, decoded) => {
    if (err) return res.status(401).json({ erro: 'Token inválido' });

    req.userId = decoded.id;
    next();
  });
};

export default verificarToken;
