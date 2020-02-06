'use strict';
module.exports = function(app) {
  var tarjetas = require('../controllers/rtarjetatia');

  // todoList Routes
  app.route('/tarjetas')
    .get(tarjetas.list_all_cards)
    .post(tarjetas.create_a_card);
   
   app.route('/tarjetas/:cardId')
    .get(tarjetas.read_a_card);
    };