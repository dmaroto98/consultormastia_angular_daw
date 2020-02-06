'user strict';
var sql = require('./db.js');

//Product object constructor
var Product = function(product){
    this.FechaCreacion = product.Nombres;
    this.Descripcion = product.Apellidos;
    this.FechaCaducidad = product.Email;
	this.CodigoBarras = product.Direccion;
	this.CodigoProducto = product.FechaIngreso;
	this.Categoria = product.FechaActualizacion;
	this.NroDocumento = product.SucursalRegistro;
};
Product.createProduct = function (newProduct, result) {    
        sql.query("INSERT INTO admintia_producto set ?", newProduct, function (err, res) {
                
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
Product.getProductById = function (ProductId, result) {
        sql.query("Select CodigoProducto,CodigoBarras from admintia_producto where CodigoProducto = ? ", ProductId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Product.getAllProducts= function (result) {
        sql.query("Select * from admintia_producto", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Producto : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Product;