'use strict';

var client = require('../models/mcliente.js');

exports.list_all_clients = function(req, res) {
  client.getAllClients(function(err, client) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', client);
    res.send(client);
  });
};



exports.create_a_client = function(req, res) {
  var new_client = new client(req.body);

  //handles null error 
   if(!new_client.Nombres || !new_client.Apellidos || !new_client.Email || !new_client.Direccion || !new_client.FechaIngreso || !new_client.FechaActualizacion || !new_client.SucursalRegistro || !new_client.Cedula){

            res.status(400).send({ error:true, message: 'Please provide client/status' });

        }
else{
  
  client.createClient(new_client, function(err, client) {
    
    if (err)
      res.send(err);
    res.json(client);
  });
}
};


exports.read_a_client = function(req, res) {
  client.getClientById(req.params.clientId, function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};


