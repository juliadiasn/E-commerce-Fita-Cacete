import jwt from 'jsonwebtoken';
import tbUser from '../models/userModel.mjs';

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: 'You most be logged in.' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You most be logged in.' });
    }

    const { userId } = payload;

    const user = await tbUser.findByPk(userId);
    req.user = user;
    next();
  });
};
