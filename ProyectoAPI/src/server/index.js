const express = require('express')

//Herramienta de lock { registra y muestra en la consola}
const morgan = require('morgan')
const app = express()

//Servidor tipo web
const http = require('http')

//json certificados
const options = {}

//dev más definida 
app.use(morgan('dev'))

app.use(express.json({limit: '500kb'}))
app.use(express.urlencoded({extended: true}))


//agregán ambas al servidor
require('../services/router')(app)
require('../services/default')(app)

// Generar el servidor 

http.createServer(options, app).listen(3000,()=>{
    console.log('El servidor se encuentra funcionando')
})

