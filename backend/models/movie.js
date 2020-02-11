var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  poster: String,
  year: Number,
  fullplot: String,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number
  },
  genres: [String]
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;