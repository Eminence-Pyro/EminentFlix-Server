const mongoose = require('mongoose');

const FavoriteMovieSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: Number, required: true },
  title: String,
  posterPath: String,
  releaseDate: String,
  voteAverage: Number
});

module.exports = mongoose.model('FavoriteMovie', FavoriteMovieSchema);
