

const Producto = require('../models/producto.model');

module.exports = {
    getAll: async (req, res) => {
        let productos = await Producto.findAll();
        res.json({
            status: 200,
            message: "Lista de productos", 
            data: productos
        });
    },
    getById: (req, res) => {
        const id = req.params.id;  
        let producto = productos.find( producto => producto.id == id);
        res.json(producto)
    },

    getByTienda: async (req, res) => {
      let tiendaId = req.params.tiendaId;
      let productos = await Producto.findAll({
          where: { tienda_id: tiendaId }
      });
      res.json({
          status: 200,
          message: "Lista de productos por tienda",
          data: productos
      });
    },
    create: (req, res) => {
        
    },
    update: (req, res) => {

    },
    remove: (req, res) => {
        
    }
}