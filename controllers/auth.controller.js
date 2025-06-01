const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const SECRET_KEY = process.env.JWT_SECRET || 'tu_clave_secreta';

module.exports = {
  register: async (req, res) => {
    try {
      const { nombre, email, password } = req.body;

      // Verificar si el usuario existe
      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
        return res.status(400).json({ message: 'El email ya está registrado' });
      }

      // Crear usuario
      const usuario = await Usuario.create({
        nombre,
        email,
        password
      });

      // Generar token
      const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        SECRET_KEY,
        { expiresIn: '24h' }
      );

      res.status(201).json({
        message: 'Usuario registrado exitosamente',
        token,
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email
        }
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      if (password !== usuario.password) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }

      const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        SECRET_KEY,
        { expiresIn: '24h' }
      );

      res.status(200).json({
        message: 'Login exitoso',
        token,
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email
        }
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
