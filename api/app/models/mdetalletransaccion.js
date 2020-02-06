'user strict';
var sql = require('./db.js');

//Detail object constructor
var Detail = function(detail){
    this.FechaDetalle = detail.FechaDetalle;
    this.Cantidad = detail.Cantidad;
    this.Descuento = detail.Descuento;
	this.NroTransaccion = detail.NroTransaccion;
	this.NroDocumento = detail.NroDocumento;
};
Detail.createDetail = function (newDetail, result) {    
        sql.query("INSERT INTO admintia_detalletransaccion set ?", newDetail, function (err, res) {
                
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
Detail.getDetailById = function (DetailId, result) {
        sql.query("Select NroDocumento,NroTransaccion_id from admintia_detalletransaccion where NroDocumento = ? ", DetailId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Detail.getAllDetails= function (result) {
        sql.query("Select * from admintia_detalletransaccion", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Detalle : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Detail;