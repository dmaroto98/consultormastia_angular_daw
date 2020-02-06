'user strict';
var sql = require('./db.js');

//Sucursal object constructor
var Sucursal = function(sucursal){
    this.FechaApertura = sucursal.FechaApertura;
    this.DireccionSucursal = sucursal.DireccionSucursal;
    this.FormatoSucursal = sucursal.FormatoSucursal;
	this.MetrosCuadrados = sucursal.MetrosCuadrados;
	this.NroSucursal = sucursal.NroSucursal;
};
Sucursal.createSucursal = function (newSucursal, result) {    
        sql.query("INSERT INTO admintia_sucursal set ?", newSucursal, function (err, res) {
                
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
Sucursal.getSucursalById = function (SucursalId, result) {
        sql.query("Select DireccionSucursal from admintia_sucursal where NroSucursal = ? ", SucursalId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Sucursal.getAllSucursal = function (result) {
        sql.query("Select * from admintia_sucursal", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Sucursals : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Sucursal;