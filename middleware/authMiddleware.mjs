import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res, next) {
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Não autorizado
  }

  jwt.verify(token, 'MY_SECRET_KEY', (err, user) => {
    if (err) {
      return res.sendStatus(403); // Proibido
    }
    req.user = user; // Anexa os dados do usuário à solicitação
    next();
  });
}