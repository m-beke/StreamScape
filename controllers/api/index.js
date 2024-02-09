const movieRoutes = require('./movieRoutes')

const router = require('express').Router();

// Import all of the routes from /api/ here
const userData=require('./userRoutes');
// Connect the routes to the router here
router.use('/user', userData);router.use('/movie', movieRoutes)
module.exports = router;
