const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db.js');
const Usuario = require('./usuario.js');

const Cita = sequelize.define('Cita', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  pacienteId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{7,15}$/ // Solo números, entre 7 y 15 dígitos
    }
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: false
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'),
    defaultValue: 'pendiente'
  }
}, {
  timestamps: true
});

// Relación con Usuario
Cita.belongsTo(Usuario, { foreignKey: 'pacienteId', as: 'paciente' });

module.exports = Cita; 