const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'tu_clave_secreta';

module.exports = function (req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: 'Token no proporcionado' });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Token inválido' });
  }
}; 