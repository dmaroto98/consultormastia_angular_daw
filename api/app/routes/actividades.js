'use strict';
module.exports = function(app) {
  var actividades = require('../controllers/ractividades');

  // todoList Routes
  app.route('/actividades')
    .get(actividades.list_all_activities);
    };