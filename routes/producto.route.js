const { get } = require('http');

const productos = [
    { id: 1, name: 'Producto 1', price: 100 },  
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }, 
    { id: 4, name: 'Producto 4', price: 400 },
    { id: 5, name: 'Producto 5', price: 500 }
]

function productoRoute(express) {
  const router = express.Router();
  const { getAll, getById, create, update, remove } = require('../controllers/producto.controller.js');

  // Define the routes for the producto resource
  router.get('/', getAll)
  router.get('/:id', getById);

  router.post('/', create);
  router.put('/:id', update);
  router.delete('/:id', remove);

  return router;
}

module.exports = productoRoute