'use strict';

var Actividades = require('../models/mactividades.js');
// Retrieve and return all notes from the database.
exports.list_all_activities = (req, res) => {
	Actividades.find()
	.then(activity => {
		res.send(activity);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving activity."
		});
	});
};