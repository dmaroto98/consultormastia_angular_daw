var cors = require('cors');

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200/'
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Configuring the database
const dbConfig = require('./dbmongo.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

var sucursal = require('./app/routes/sucursal'); //importing route
sucursal(app); //register the route
var cliente = require('./app/routes/cliente'); 
cliente(app);
var categoria = require('./app/routes/categoria'); 
categoria(app);
var tarjetatia = require('./app/routes/tarjetatia'); 
tarjetatia(app);
var transaccion = require('./app/routes/transaccion'); 
transaccion(app);
var detalletransaccion = require('./app/routes/detalletransaccion'); 
detalletransaccion(app);
var producto = require('./app/routes/producto'); 
producto(app);
var usuarios = require('./app/routes/usuarios'); 
usuarios(app);
var usuariosmongo = require('./app/routes/usuariosmongo'); 
usuariosmongo(app);
var mailsmongo = require('./app/routes/mailmongo'); 
mailsmongo(app);
var actividades = require('./app/routes/actividades'); 
actividades(app);