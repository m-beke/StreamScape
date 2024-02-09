
const router = require('express').Router();

// Import all of the routes from /api/ here
const movieRoutes = require('./movieRoutes');
const userRoutes = require('./userRoutes');
// Connect the routes to the router here
router.use('/user', userRoutes);
router.use('/movie', movieRoutes);
module.exports = router;
