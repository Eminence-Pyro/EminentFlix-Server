const express = require('express');
const router = express.Router();
const FavoriteMovie = require('../models/FavoriteMovie');
const verifyToken = require('../middleware/auth');

// Simple welcome route (unprotected)
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Movie API' });
});

// Save a favorite movie  (POST /api/movies/favorite)
router.post('/favorite', verifyToken, async (req, res) => {
  try {
    const newFav = new FavoriteMovie({
      userId: req.user.id,
      ...req.body
    });
    await newFav.save();
    res.status(201).json({ message: 'Favorite saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save favorite' });
  }
});

// Get current user’s favorites  (GET /api/movies/favorites)
router.get('/favorites', verifyToken, async (req, res) => {
  try {
    const favorites = await FavoriteMovie.find({ userId: req.user.id });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});

module.exports = router;
