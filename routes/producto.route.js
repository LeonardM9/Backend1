const { get } = require('http');
const authToken = require('../middlewares/jwt.mid.js');

function productoRouter(express){
    
    try {
        const router = express.Router()   
        const { getAll, getById, create, update, remove } = require('../controllers/producto.controller.js')
    
        router.get('/', getAll)
        router.get('/:id', getById)
        router.post('/', [authToken] ,create)
        router.put('/:id',authToken, update)
        router.delete('/:id',authToken, remove)
    
        return router
    } catch (error) {
        console.log(error);
    }


}


module.exports = productoRouter