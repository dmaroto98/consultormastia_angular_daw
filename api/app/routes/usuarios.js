'use strict';
module.exports = function(app) {
  var usuarios = require('../controllers/rusuarios');

  // todoList Routes
  app.route('/usuarios')
    .get(usuarios.list_all_users);
    };