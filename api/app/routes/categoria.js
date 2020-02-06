'use strict';
module.exports = function(app) {
  var categorias = require('../controllers/rcategoria');

  // todoList Routes
  app.route('/categorias')
    .get(categorias.list_all_category)
    .post(categorias.create_a_category);
   
   app.route('/categorias/:categoryId')
    .get(categorias.read_a_category);
    };