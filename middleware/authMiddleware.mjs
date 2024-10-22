import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Token não fornecido. Acesso negado!' });
  }

  jwt.verify(token, 'MY_SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido ou expirado!' });
    }

    req.userId = decoded.userId;
    next();
  });
}
