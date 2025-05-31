
function authRouter(express){
    
    const router = express.Router()
    const { login } = require('../controllers/auth.controller.js')

    router.post('/login', login)
    return router
}


module.exports = authRouter