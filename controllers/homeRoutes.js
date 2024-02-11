const router = require('express').Router();

// Import any models you plan to use for data's routes here

// If you would like to use an authGuard middleware, import it here

// add a get / (landing page) route here
router.get('/', async (req, res) => {
  console.log('Landing page attempting to be retrieved');
  res.render('home')
  try {
  } catch (err) {
    console.log('There was an error retrieving landing page');
    res.status(500).json(err);
  }
});

// add a get /login route here
router.get('/login', (req, res) => {
  res.render("login-signup")
  console.log('Login page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving login page');
    res.status(500).json(err);
  }
});

// add a get /signup route here
router.get('/signup', (req, res) => {
  res.render("login-signup")
  console.log('Signup page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving signup page');
    res.status(500).json(err);
  }
});

// takes you to the 'About Us' Page
router.get('/about', (req, res) => {
  res.render("about")
  console.log('About page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving about page');
    res.status(500).json(err);
  }
});

router.get('/results', (req, res) => {
  res.render("results")
  console.log('Resluts page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving results page');
    res.status(500).json(err);
  }
});

router.get('/watchlist', (req, res) => {
  res.render("watchlist")
  console.log('Watchlist page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving watchlist page');
    res.status(500).json(err);
  }
});

router.get('/reviews', (req, res) => {
  res.render("reviews")
  console.log('Reviews page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving reviews page');
    res.status(500).json(err);
  }
});
module.exports = router;
