const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Add any new columns to the DataOne model here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
<<<<<<< Updated upstream:models/movie.js
<<<<<<< Updated upstream:models/movie.js
<<<<<<< Updated upstream:models/movie.js
<<<<<<< Updated upstream:models/movie.js
<<<<<<< Updated upstream:models/movie.js
    watched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
=======
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> Stashed changes:models/DataOne.js
=======
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> Stashed changes:models/DataOne.js
=======
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> Stashed changes:models/DataOne.js
=======
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> Stashed changes:models/DataOne.js
=======
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> Stashed changes:models/DataOne.js
      
    },
    
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);

module.exports = Movie;
