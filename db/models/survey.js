// File: ./models/products.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
  name: String,
  img:String
});

//Export function to create "SurveySchema" model class
module.exports = mongoose.model('Survey', SurveySchema );