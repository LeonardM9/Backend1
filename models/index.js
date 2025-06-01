const sequelize = require('../databases/db.js');
const Producto = require('./producto.model.js');
const Tienda = require('./Tienda.model.js');

const setupdb = () => {
    (async () => {
        console.log(" >> ", Producto.name);
        console.log(" >> ", Tienda.name);
        console.log(" ");
        
        Tienda.hasMany(Producto, { foreignKey: 'tienda_id'});

       
    })();
}

module.exports = setupdb