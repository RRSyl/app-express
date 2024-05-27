'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    static associate(models) {
      film.belongsToMany(models.category, { through: models.filmCategory, foreignKey: 'film_id' });
    }
  }
  film.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    releaseYear: DataTypes.DATE,
    languangeId: DataTypes.INTEGER,
    rentalDuration: DataTypes.INTEGER,
    rentalRate: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    replacementCost: DataTypes.FLOAT,
    rating: DataTypes.FLOAT,
    lastUpdate: DataTypes.DATE,
    specialFeatures: DataTypes.STRING,
    fullText: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'film',
  });
  return film;
};