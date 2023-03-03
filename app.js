const express = require('express') //Importamos la dependencia.
const app = express() //Declaramos una App de Express
app.use('/assets', express.static(__dirname + '/public'));

const port = process.env.Port || 3000;
//Setteamos el puerto para que escuche el servidor.

//Primera Route (Está al nivel de la raiz "/"), Hello word!
app.get('/', (req, res) => {
  cad=`<!DOCTYPE html> <html land="en">
  <head>
    <meta charset = "UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IW=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/assets/style.css" type="text/css" rel="stylesheet">
    <title>Document</title>
  </head>
  <body> Hello word, this is the root route updated
  </body>
  <html>`
  res.send(cad);
});

//Segunda ruta /api, regresa un objeto JSON
app.get('/api', (req, res) => {
  res.json({firstname: 'Alejandro', lastname: 'Chacón'});
});

//Tercera Route, recibe un parametro
app.get('/person/:id', (req, res) => {
  res.send(`<html></head><body><h1>Person: ` + req.params.id +`</h1></body></html>`);
});

//Es el canal en el que se escucha.
app.listen(3000);