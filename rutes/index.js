const express = require("express");

const app = express();

//Instanciar las rutas generales
app.use(require("./rutes-general.js"));

module.exports = app;