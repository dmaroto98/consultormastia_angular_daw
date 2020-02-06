'use strict';

var product = require('../models/mproducto.js');

exports.list_all_products = function(req, res) {
  product.getAllProducts(function(err, product) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', product);
    res.send(product);
  });
};



exports.create_a_product = function(req, res) {
  var new_product = new product(req.body);

  //handles null error 
   if(!new_product.FechaCreacion || !new_product.Descripcion || !new_product.FechaCaducidad || !new_product.CodigoBarras || !new_product.CodigoProducto || !new_product.Categoria || !new_product.NroDocumento){

            res.status(400).send({ error:true, message: 'Please provide product/status' });

        }
else{
  
  product.createProduct(new_product, function(err, product) {
    
    if (err)
      res.send(err);
    res.json(product);
  });
}
};


exports.read_a_product = function(req, res) {
  product.getProductById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


