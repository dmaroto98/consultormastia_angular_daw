'use strict';
module.exports = function(app) {
  var productos = require('../controllers/rproducto');

  // todoList Routes
  app.route('/productos')
    .get(productos.list_all_products)
    .post(productos.create_a_product);
   
   app.route('/productos/:productId')
    .get(productos.read_a_product);
    };