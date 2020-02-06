'use strict';
module.exports = function(app) {
  var detalles = require('../controllers/rdetalletransaccion');

  // todoList Routes
  app.route('/detalles')
    .get(detalles.list_all_details)
    .post(detalles.create_a_detail);
   
   app.route('/detalles/:detailId')
    .get(detalles.read_a_detail);
    };