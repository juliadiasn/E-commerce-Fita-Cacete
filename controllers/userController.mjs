import jwt from 'jsonwebtoken';
import tbUser from '../models/userModel.mjs';

export async function registerUser(req, res) {
  const { nome, email, password } = req.body;
  try {
    const user = new tbUser({ nome, email, password });
    await user.save();

    const token = jwt.sign({ userId: user.id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (error) {
    return res.status(422).send({ error: error.message });
  }
}
export async function loginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }
  console.log(email);

  const user = await tbUser.findOne({ where: { email } });
  console.log(user);

  if (!user) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }

  try {
    const data = await user.comparePassword(password);
    if (data) {
      const token = jwt.sign({ userId: user.id }, 'MY_SECRET_KEY');
      res.send({ token });
    } else {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  } catch (error) {
    return res.status(422).send({ error: 'Inavlid password or email' });
  }
}
