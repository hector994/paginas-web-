const express = require("express");
var app = express();

//const mustacheExpress = require("mustache-express");

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

//app.engine(".mustache", mustacheExpress());
app.set('view engine', 'pug');
//app.set("view engine", "mustache");
//app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    const datos = [
        { nombre: "Programar"},
        { nombre: "Ver peliculas y series"},
        { nombre: "Leer libros"},
        { nombre: "Practicar deportes"},
        { nombre: "Hacer ejercicio"}
      ];
    
      res.render("index", {
        titulo: "Laboratorio 3",
        nombre: "Hector Eduardo Murillo Herrera",
        carrera: "Ingenieria en desarrollo de software",
        datos: datos
      });
    
  //res.render('index',{titulo: "my first app",materia:"dwa"});

  //res.send('Aprendiendo palntilla en expres js');
});

app.listen(3000, () => {
  console.log("servidor iniciado...");
});
