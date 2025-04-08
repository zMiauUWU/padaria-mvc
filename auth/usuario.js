// auth/usuario.js
import bcrypt from 'bcryptjs';

const senhaOriginal = '123456'; // senha do usuário
const senhaHash = bcrypt.hashSync(senhaOriginal, 8);

export const usuario = {
  id: 1,
  username: 'admin',
  password: senhaHash
};
