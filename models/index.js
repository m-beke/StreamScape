// import all models here
const User = require('./User');
const DataOne = require('./DataOne');
// create any associations here
User.hasMany(DataOne, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  DataOne.belongsTo(User, {
    foreignKey: 'user_id'
  });
// export all models here
module.exports = { User, DataOne};
