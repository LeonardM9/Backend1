

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; 

module.exports = {
    login: (req, res) => {

        const { user, password } = req.body;

        if(user == 'admin' && password == 'admin'){
            const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: '1h' });
            return res.status(200).json({ token });
        }else{
            return res.status(401).json({ message: 'Invalid credentials' });
        }

    },
}