// File: ./models/dog.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var DogSchema = new Schema({
        image_id1   : Number,
        image_tag1  : String,
        image_link1 : String
});

//Export function to create "DogSchema" model class
module.exports = mongoose.model('Dog', DogSchema );