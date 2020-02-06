'use strict';
module.exports = function(app) {
  var transacciones = require('../controllers/rtransaccion');

  // todoList Routes
  app.route('/transacciones')
    .get(transacciones.list_all_transactions)
    .post(transacciones.create_a_transaction);
   
   app.route('/transacciones/:transactionId')
    .get(transacciones.read_a_transaction);
    };


