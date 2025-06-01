const express = require('express')
const cors = require('cors')
const setupdb = require('./models/index.js')
const Usuario = require('./models/usuario');
const Cita = require('./models/cita');
const sequelize = require('./databases/db.js');

// Routers
const productoRouter = require('./routes/producto.route.js')
const authRouter = require('./routes/auth.route.js')
const citaRouter = require('./routes/cita.route.js')

const app = express()
const port = 3002

// Configuración de CORS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://odontintegral.netlify.app'
  ],
  credentials: true
}))

setupdb() // Inicializa la base de datos y los modelos
app.use(express.json())

// Sincronizar modelos con la base de datos
sequelize.sync();

// Definición de rutas
app.use('/v1/producto', productoRouter)
app.use('/api/auth', authRouter)
app.use('/api/citas', citaRouter)

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
