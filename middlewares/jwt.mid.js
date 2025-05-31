

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; 


function authToken(req, res, next) { 

  if(!req.headers['authorization']) {
    return res.status(401).send('Access denied. No token provided.');
  }
 
  const token = (req.headers['authorization']).split(' ')[1];

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token.');
    }

    req.user = decoded;
    
    next();

  })

}

module.exports = authToken;