'use strict';

var user = require('../models/musuarios.js');

exports.list_all_users = function(req, res) {
  user.getAllUsers(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
    res.send(user);
  });
};

