'use strict';
module.exports = function(app) {
  var usuariosmongo = require('../controllers/rusuariosmongo');

  // todoList Routes
  app.route('/usuariosmongo')
    .get(usuariosmongo.list_all_users_mongo);
    };