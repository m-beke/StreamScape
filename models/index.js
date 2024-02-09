// import all models here
const User = require('./User');
const Movie = require('./Movie');
// create any associations here
User.hasMany(Movie, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Movie.belongsTo(User, {
    foreignKey: 'user_id'
  });
// export all models here
module.exports = { User, Movie};
