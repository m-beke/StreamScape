const router = require('express').Router();
const { Movie } = require('../../models')
// import any models you plan to use for this data's routes here
const fetch = require('node-fetch');


// If you would like to you an authGuard middleware, import it here
router.get('/', async (req, res) => {
  try {
    // const data = await Movie.findAll()
    // const movies = data.map((movie) => movie.get({ plain: true  }));
    const url = 'https://streaming-availability.p.rapidapi.com/search/title';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3f01ce3775mshc65e5fdb455e382p181b75jsn99eeab1b46ee',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    const response = await fetch(url, options);
    const movies = await response.json(); // Parse JSON response
    //res.json(movies)
    res.render("results",{name: movies.result.name})

  } catch (err) {
    console.log('There was an error adding data one');
    res.status(500).json(err);
  }
});

// /api/dataOne
// add a post API route here
router.post('/', async (req, res) => {
  console.log('Data one attempting to be added');
  try {
    const newMovie = await Movie.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newMovie);

  } catch (err) {
    console.log('There was an error adding data one');
    res.status(500).json(err);
  }
});

// /api/dataOne/:id
// add a delete API route here
router.delete('/:id', async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: {
        id: re.params.id,
        user_id: req.session.user_id,
      }
    })
    res.status(200).json(movieData)

    console.log(`Data one with ID ${newMovie} attempting to be deleted`);
  } catch (err) {
    console.log(`There was an error deleting data one with ID ${newMovie}`);
    res.status(500).json(err);
  }
});

// /api/dataOne/:id
// add a put API route here
router.put('/:id', async (req, res) => {
  try {
    const newMovie = req.newMovie;
    const updateMovie = await Movie.update({
      watched: true

    }, {
      id: req.params.id,

    })
    res.status(200).json(updateMovie);

    console.log(`Data one with ID ${newMovie} attempting to be updated`);
  } catch (err) {
    console.log(`There was an error updating data one with ID ${newMovie}`);
    res.status(500).json(err);
  }
});

// /api/dataOne/:id
// add a get API route here
router.get('/:id', async (req, res) => {
  try {
    const newMovie = req.newMovie;
    console.log(`Data one with ID ${newMovie} attempting to be retrieved`);
  } catch (err) {
    console.log(`There was an error retrieving data one with ID ${newMovie}`);
    res.status(500).json(err);
  }
});

module.exports = router;
