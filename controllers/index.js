const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const pageOne = require('./pageOneRoutes');
// Import all of the routes from controllers here
router.use('/', homeRoutes)
// Connect the routes to the router here

module.exports = router;
