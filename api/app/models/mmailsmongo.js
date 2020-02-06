const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const Mail = new Schema({
    username    : String,
    nombre    : String,
    asunto    : String,
    content    : String
});

module.exports = mongoose.model( "Mail", Mail );