const express = require("express");
var app = express();

const mustacheExpress = require("mustache-express");

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.engine(".mustache", mustacheExpress());
//app.set('view engine', 'pug');
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  const datos = [
    { nombre: "Nestor", edad: 26 },
    { nombre: "Maria", edad: 20 },
    { nombre: "Hector", edad: 21 },
    { nombre: "Murillo", edad: 22 },
  ];

  res.render("index", {
    titulo: "My frist app w Mustache",
    nombre: "Ness",
    datos: datos,
  });

  //res.render('index',{titulo: "my first app",materia:"dwa"});

  //res.send('Aprendiendo palntilla en expres js');
});

app.listen(3000, () => {
  console.log("servidor iniciado...");
});
