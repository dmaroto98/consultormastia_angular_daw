'user strict';
var sql = require('./db.js');

//Transaction object constructor
var Transaction = function(transaction){
    this.FechaTransaccion = transaction.FechaTransaccion;
    this.TipoTransaccion = transaction.TipoTransaccion;
    this.PuntosGenerados = transaction.PuntosGenerados;
	this.Total = transaction.Total;
	this.Iva = transaction.Iva;
	this.NroTransaccion = transaction.NroTransaccion;
	this.NumeroTarjeta = transaction.NumeroTarjeta;
	this.Cedula = transaction.Cedula;
	this.NroSucursal = transaction.NroSucursal;
};
Transaction.createTransaction = function (newTransaction, result) {    
        sql.query("INSERT INTO admintia_transaccion set ?", newTransaction, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Transaction.getTransactionById = function (TransactionId, result) {
        sql.query("Select NroTransaccion,Cedula_id from admintia_transaccion where NroTransaccion = ? ", TransactionId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Transaction.getAllTransactions= function (result) {
        sql.query("Select * from admintia_transaccion", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Transaccion : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Transaction;