const productos = [
    { id: 1, name: 'Producto 1', price: 100 },  
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }, 
    { id: 4, name: 'Producto 4', price: 400 },
    { id: 5, name: 'Producto 5', price: 500 }
]

module.exports = {
  getAll: (req, res) => {
    // Implementación de obtención de todos los productos
    res.json(productos);
  },

  getById: (req, res) => {
    const id = req.params.id;

    let producto = productos.find(producto => producto.id == id);

    res.json(producto)
  },

  create: (req, res) => {
    // Implementación de creación de producto
  },

  update: (req, res) => {
    // Implementación de actualización de producto
  },

  remove: (req, res) => {
    // Implementación de eliminación de producto
  }
};