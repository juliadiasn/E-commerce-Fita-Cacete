import jwt from 'jsonwebtoken';
import tbUser from '../models/userModel.mjs';
import bcrypt from 'bcrypt';

export async function registerUser(req, res) {
  const { nome, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);

    const user = new tbUser({ nome, email, password: hashPassword });
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

  const user = await tbUser.findOne({ where: { email } });
  // console.log(user);

  if (!user) {
    console.log('morrendo');
    return res.status(422).send({ error: 'Invalid password or email' });
  }

  try {
    const data = await bcrypt.compare(password, user.dataValues.password);
    // console.log(data);
    // console.log(password);
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
