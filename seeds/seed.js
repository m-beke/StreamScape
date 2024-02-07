const sequelize = require('../config/connection');

// import any models you want to seed here
const { User } = require('../models');
// import any data you want to seed here

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('Sequelize synced');

  // bulkCreate your users here
  const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
  // hint- use your activities!

  console.log('Users created');

  // Here is an example of how you can randomly assign a user to your data!
  for (const dataOne of dataOneData) {
    // gets a random user
    const randomUser = users[Math.floor(Math.random() * users.length)];
    console.log(`Random user for dataOne: ${randomUser.id}`);
    // assigns the user to the data
    await DataOne.create({
      ...dataOne,
      user_id: randomUser.id,
    });
  }
  console.log('Data One created');
  // console.log(favorite)
  process.exit(0);
};

seedDatabase();
