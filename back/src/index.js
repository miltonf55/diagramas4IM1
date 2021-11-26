const express = require('express')
const path = require('path')
const morgan = require('morgan')

//Inicializaciones
const app = express()

//Configuraciones
app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Rutas
app.use('/', require('./routes/routes'))

//Archivos estaticos
app.use(express.static(path.join(__dirname,'public')))

//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`SERVER RUNNING IN PORT ${app.get('port')}`)
})