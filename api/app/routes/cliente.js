'use strict';
module.exports = function(app) {
  var clientes = require('../controllers/rcliente');

  // todoList Routes
  app.route('/clientes')
    .get(clientes.list_all_clients)
    .post(clientes.create_a_client);
   
   app.route('/clientes/:clientId')
    .get(clientes.read_a_client);
    };