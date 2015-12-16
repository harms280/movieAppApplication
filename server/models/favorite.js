var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
  title: {
    type: String,
    required: true},
  year: String,
  imdbID: String,
  poster: String
});

var Favorites = mongoose.model('')