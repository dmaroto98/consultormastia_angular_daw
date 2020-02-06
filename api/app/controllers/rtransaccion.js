'use strict';

var transaction = require('../models/mtransaccion.js');

exports.list_all_transactions = function(req, res) {
  transaction.getAllTransactions(function(err, transaction) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', transaction);
    res.send(transaction);
  });
};



exports.create_a_transaction = function(req, res) {
  var new_transaction = new transaction(req.body);

  //handles null error 
   if(!new_transaction.FechaTransaccion || !new_transaction.TipoTransaccion || !new_transaction.PuntosGenerados || !new_transaction.Total || !new_transaction.Iva || !new_transaction.NroTransaccion || !new_transaction.NumeroTarjeta || !new_transaction.Cedula || !new_transaction.NroSucursal){

            res.status(400).send({ error:true, message: 'Please provide transaction/status' });

        }
else{
  
  transaction.createTransaction(new_transaction, function(err, transaction) {
    
    if (err)
      res.send(err);
    res.json(transaction);
  });
}
};


exports.read_a_transaction = function(req, res) {
  transaction.getTransactionById(req.params.transactionId, function(err, transaction) {
    if (err)
      res.send(err);
    res.json(transaction);
  });
};