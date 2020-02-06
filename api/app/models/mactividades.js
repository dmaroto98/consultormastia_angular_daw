const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const Actividades = new Schema({
    hour    : String,
    incharge    : String,
    desc    : String
});

module.exports = mongoose.model( "Actividades", Actividades );