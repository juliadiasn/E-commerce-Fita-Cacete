import jwt from 'jsonwebtoken';
import tbUser from '../models/userModel.mjs';
import bcrypt from 'bcrypt';

export async function registerUser(req, res) {
  const { nome, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = new tbUser({ nome, email, password: hashPassword });
    await user.save();

    const token = jwt.sign({ userId: user.id }, 'MY_SECRET_KEY', {
      expiresIn: '1h',
    });
    res.cookie('authToken', token, { httpOnly: true, secure: false });
    res.send({ message: 'Registro realizado com sucesso!' });
  } catch (error) {
    return res.status(422).send({ error: error.message });
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: 'Deve fornecer e-mail e senha' });
  }

  const user = await tbUser.findOne({ where: { email } });

  if (!user) {
    return res.status(422).send({ error: 'Email ou senha inválidos' });
  }

  try {
    const data = await bcrypt.compare(password, user.dataValues.password);
    if (data) {
      const token = jwt.sign({ userId: user.id }, 'MY_SECRET_KEY', {
        expiresIn: '1h',
      });
      res.cookie('authToken', token, { httpOnly: true, secure: false });
      res.send({ message: 'Login realizado com sucesso!' });
    } else {
      return res.status(422).send({ error: 'Email ou senha inválidos' });
    }
  } catch (error) {
    return res.status(422).send({ error: 'Email ou senha inválidos' });
  }
}

export async function profileUser(req, res) {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).send({ error: 'Não autenticado!' });
  }

  try {
    const decoded = jwt.verify(token, 'MY_SECRET_KEY');
    const user = await tbUser.findByPk(decoded.userId);

    if (!user) {
      return res.status(404).send({ error: 'Usuário não encontrado!' });
    }

    res.send({ nome: user.nome, email: user.email });
  } catch (error) {
    return res.status(401).send({ error: 'Não autenticado.' });
  }
}

export async function logoutUser(req, res) {
  res.clearCookie('authToken');
  res.send({ message: 'Logout realizado com sucesso!' });
}
