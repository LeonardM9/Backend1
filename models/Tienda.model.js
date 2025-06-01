const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db.js');

const Tienda = sequelize.define(
    'Tienda',
    {
        nombre: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        precio: { type: DataTypes.FLOAT, allowNull: false },
        descripcion: { type: DataTypes.TEXT, allowNull: true },
    },
    {},
)

module.exports = Tienda;