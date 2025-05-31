const express = require('express')
const { exitCode } = require('process')
const app = express()
const port = 3002

app.use(express.json())


// Routers
const producto = require('./routes/producto.route.js')
const auth     = require('./routes/auth.route.js')

// definicion de rutas
app.use('/v1/producto', producto(express))
app.use('/v1/auth', auth(express))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
