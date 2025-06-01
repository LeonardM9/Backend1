const Cita = require('../models/cita');
const Usuario = require('../models/usuario');
const { Op } = require('sequelize');

// Validaciones auxiliares
function isDateInPast(date, time) {
  const now = new Date();
  const citaDate = new Date(`${date}T${time}`);
  return citaDate < now;
}

exports.agendarCita = async (req, res) => {
  try {
    const { nombre, email, telefono, fecha, hora, motivo } = req.body;
    const pacienteId = req.userId;

    // Validar campos requeridos
    if (!nombre || !email || !telefono || !fecha || !hora || !motivo) {
      return res.status(400).json({ success: false, message: 'Todos los campos son requeridos', error: 'Campos faltantes' });
    }

    // Validar formato de email
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return res.status(400).json({ success: false, message: 'Email inválido', error: 'Formato de email incorrecto' });
    }

    // Validar formato de teléfono
    if (!/^[0-9]{7,15}$/.test(telefono)) {
      return res.status(400).json({ success: false, message: 'Teléfono inválido', error: 'Formato de teléfono incorrecto' });
    }

    // Validar fecha y hora no en el pasado
    if (isDateInPast(fecha, hora)) {
      return res.status(400).json({ success: false, message: 'No se puede agendar en el pasado', error: 'Fecha y hora inválidas' });
    }

    // Validar que no haya cita duplicada para el mismo usuario, fecha y hora
    const citaExistente = await Cita.findOne({
      where: {
        pacienteId,
        fecha,
        hora
      }
    });
    if (citaExistente) {
      return res.status(400).json({ success: false, message: 'Ya tienes una cita agendada en esa fecha y hora', error: 'Cita duplicada' });
    }

    // Crear la cita
    const cita = await Cita.create({
      pacienteId,
      nombre,
      email,
      telefono,
      fecha,
      hora,
      motivo
    });

    return res.status(201).json({
      success: true,
      message: 'Cita agendada exitosamente',
      cita
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Error al agendar la cita', error: error.message });
  }
};

exports.obtenerCitas = async (req, res) => {
  try {
    const pacienteId = req.userId;
    const citas = await Cita.findAll({ where: { pacienteId }, order: [['fecha', 'ASC'], ['hora', 'ASC']] });
    return res.status(200).json({ success: true, citas });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Error al obtener las citas', error: error.message });
  }
}; 