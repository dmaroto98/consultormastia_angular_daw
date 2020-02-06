'user strict';
var sql = require('./db.js');

//Card object constructor
var Card = function(card){
    this.FechaEmision = card.FechaEmision;
    this.FechaModificacion = card.FechaModificacion;
    this.TipoTarjeta = card.TipoTarjeta;
	this.Cedula = card.Cedula;
	this.NumeroTarjeta = card.NumeroTarjeta;
};
Card.createCard = function (newCard, result) {    
        sql.query("INSERT INTO admintia_tarjetatia set ?", newCard, function (err, res) {
                
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
Card.getCardById = function (CardId, result) {
        sql.query("Select NumeroTarjeta,Cedula_id from admintia_tarjetatia where NumeroTarjeta = ? ", CardId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Card.getAllCards = function (result) {
        sql.query("Select * from admintia_tarjetatia", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Tarjeta tia : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Card;