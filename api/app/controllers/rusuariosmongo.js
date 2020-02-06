'use strict';

var User = require('../models/musuariosmongo.js');
// Retrieve and return all notes from the database.
exports.list_all_users_mongo = (req, res) => {
	User.find()
	.then(users => {
		res.send(users);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving users."
		});
	});
};
