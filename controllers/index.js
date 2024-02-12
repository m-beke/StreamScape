const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require("./api/");
// Import all of the routes from controllers here
router.use('/', homeRoutes)
// Connect the routes to the router here
router.use('/api', apiRoutes)

module.exports = router;
