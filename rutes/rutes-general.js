const express = require("express");
const fsPromise = require('fs').promises;

const app = express();

app.get("/activaJS", (req, res) => {
    res.send("<div align='center'><br><br><font color='red'><h1 align='center'>Para poder usar ésta página activa JavaScript y recarga</div>");
});

app.get("/", (req, res) => {
    res.render("index", {
        TituloPagina: "Bienvenido",
        Inicio: "Si"
    });
});
app.post("/download", (req, res) => {
    var data=req;
    fsPromise.writeFile(__dirname + '/fileDown/archivo.json', data, error => {
        if (error)
        console.log(error);
        else
        console.log('El archivo fue creado');
    });
    res.download(__dirname + '/fileDown/archivo.json');
});
/*app.get("/contact", (req, res) => {
    res.render("contact", {
        TituloPagina: "Contactanos",
        Inner: "Si",
        Contact: "Si"
    });
});*/

module.exports = app;