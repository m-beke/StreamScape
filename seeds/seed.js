const sequelize = require('../config/connection');

// import any models you want to seed here
const { User } = require('../models');
const { Movie } = require('../models');
// import any data you want to seed here
const userData=require('./userData.json');
const movieData=require('./movieData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });



  // hint- use your activities!

  console.log('Users created');

  // Here is an example of how you can randomly assign a user to your data!
  for (const movie of movieData) {
    // gets a random user
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log(`Random user for movie: ${randomUser.id}`);
    // assigns the user to the data
    await Movie.create({
      ...movie,
      user_id: randomUser.id,
    });

    console.log('moive created');
  }
  process.exit(0);
};

seedDatabase();
