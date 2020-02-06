'use strict';

var Mail = require('../models/mmailsmongo.js');
// Retrieve and return all notes from the database.
exports.list_all_mails_mongo = (req, res) => {
	Mail.find()
	.then(mails => {
		res.send(mails);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving mails."
		});
	});
};