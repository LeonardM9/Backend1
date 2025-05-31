const express = require('express')
const app = express()
const port = 3002

app.use(express.json())

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

// Routers
const producto = require('./routes/producto.route.js')

// Definicion de rutas
app.use('/v1/producto', producto(express))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
