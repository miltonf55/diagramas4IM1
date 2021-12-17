//Archivos de configuración
require("./config/config");
require("./helpers/helpers");

//Invocación de librerias
const hbs = require("hbs");
const express = require("express");
const session = require("express-session");
const body_parser = require('body-parser');

const http = require("http");
//
const app = express();

//Socket
let server = http.createServer(app);

app.use(body_parser.urlencoded({
    extended: true
}));

//Asignar las sessions
app.use(session({
    secret: "Hola niños",
    resave: true,
    saveUninitialized: true
}));

//Asignar el directorio estático(para imágenes,css, etc)
app.use(express.static(__dirname + "/public"));

//Asignar el motor de vistas
app.set("view engine", "hbs");

//Asignar la carpeta en la que se asignaran las vistas
hbs.registerPartials(__dirname + "/views/partials/");

//Asignar donde estan nuestras rutas
app.use(require("./rutes/index.js"));

server.listen(process.env.PORT, () => {
    console.log("Server port: ", process.env.PORT);
});
//IMPORTANTE: ESTOS METODOS PARA MANEJAR ERRORES VAN AL FINAL DE TODO
//Error 404, page not found
app.use(function(req, res, next) {
    res.status(404).render("error404", {
        TituloPagina: "Error 404"
    });
});
//error 500, algo esta mal con la app y se murio jsjsjsjs
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(404).render("error500", {
        TituloPagina: "Error 500"
    });
});