'use strict';
module.exports = function(app) {
  var sucursales = require('../controllers/rsucursal');

  // todoList Routes
  app.route('/sucursales')
    .get(sucursales.list_all_sucursals)
    .post(sucursales.create_a_sucursal);
   
   app.route('/sucursales/:sucursalId')
    .get(sucursales.read_a_sucursal);
    };