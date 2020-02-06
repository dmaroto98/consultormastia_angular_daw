'user strict';
var sql = require('./db.js');

//Client object constructor
var Client = function(client){
    this.Nombres = client.Nombres;
    this.Apellidos = client.Apellidos;
    this.Email = client.Email;
	this.Direccion = client.Direccion;
	this.FechaIngreso = client.FechaIngreso;
	this.FechaActualizacion = client.FechaActualizacion;
	this.SucursalRegistro = client.SucursalRegistro;
	this.Cedula = client.Cedula;
};
Client.createClient = function (newClient, result) {    
        sql.query("INSERT INTO admintia_cliente set ?", newClient, function (err, res) {
                
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
Client.getClientById = function (ClientId, result) {
        sql.query("Select Nombres,Apellidos from admintia_cliente where Cedula = ? ", ClientId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Client.getAllClients= function (result) {
        sql.query("Select * from admintia_cliente", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Cliente : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Client;