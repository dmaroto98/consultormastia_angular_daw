'use strict';

var sucursal = require('../models/msucursal.js');

exports.list_all_sucursals = function(req, res) {
  sucursal.getAllSucursal(function(err, sucursal) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', sucursal);
    res.send(sucursal);
  });
};



exports.create_a_sucursal = function(req, res) {
  var new_sucursal = new sucursal(req.body);

  //handles null error 
   if(!new_sucursal.FechaApertura || !new_sucursal.DireccionSucursal || !new_sucursal.FormatoSucursal || !new_sucursal.MetrosCuadrados || !new_sucursal.NroSucursal){

            res.status(400).send({ error:true, message: 'Please provide sucursal/status' });

        }
else{
  
  sucursal.createSucursal(new_sucursal, function(err, sucursal) {
    
    if (err)
      res.send(err);
    res.json(sucursal);
  });
}
};


exports.read_a_sucursal = function(req, res) {
  sucursal.getSucursalById(req.params.sucursalId, function(err, sucursal) {
    if (err)
      res.send(err);
    res.json(sucursal);
  });
};


