const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const User = new Schema({
    username    : String,
    nombre    : String,
    cargo    : String,
    ofi    : String,
	edad    : String,
    fini    : String,
	sal    : String,
	image    : String
});

module.exports = mongoose.model( "User", User );