'use strict';
module.exports = function(app) {
  var mailsmongo = require('../controllers/rmailsmongo');

  // todoList Routes
  app.route('/mailsmongo')
    .get(mailsmongo.list_all_mails_mongo);
    };