const express = require('express');
const authToken = require('../middlewares/jwt.mid.js');
const { getAll, getById, getByTienda, create, update, remove } = require('../controllers/producto.controller.js');

const router = express.Router();

router.get('/', getAll);
router.get('/tienda/:tiendaId', getByTienda);
router.get('/:id', getById);
router.post('/', [authToken], create);
router.put('/:id', authToken, update);
router.delete('/:id', authToken, remove);

module.exports = router;