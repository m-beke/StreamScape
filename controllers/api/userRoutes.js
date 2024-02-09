const router = require('express').Router();

// import any models you plan to use for this data's routes here

// /api/

// add a post user API route here
router.post('/', async (req, res) => {
  try {const userData=await User.Create
    console.log('User attempting to be added');
  } catch (err) {
    console.log('There was an error creating user');
    console.log(err);
    res.status(500).json(err);
 }
});

//api/login
//add a post login API route here
router.post('/login', async (req, res) => {
  try { const userData = await User.findOne({ where: { email: req.body.email } });

  if (!userData) {
    res
     .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
    return;
  }
 const validPassword = await userData.checkPassword(req.body.password);

 if (!validPassword) {
   res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
   return;
  }

  //Create session variables based on the logged in user
  req.session.save(() => {
    req.session.user_id = userData.id;
   req.session.logged_in = true;
    
   res.json({ user: userData, message: 'You are now logged in!' });
  });

   console.log('User attempting to log in');
 } catch (err) {
    console.log('There was an error logging in');
    console.log(err);
    res.status(500).json(err);
  }
});

///api/logout
//add a post logout API route here
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    //Remove the session variables
   req.session.destroy(() => {
     res.status(204).end();
   });
 } else {
   res.status(404).end();
 }
});

module.exports = router;
