var mongoose = require('mongoose');

favoriteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true},
  year: String,
  imdbID: String,
  poster: String
});

