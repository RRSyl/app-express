'use strict';
const {
  Model,
  ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class filmCategory extends Model {
    static associate(model) {}
  }
  filmCategory.init({
    filmId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    lastUpdate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'filmCategory',
  });
  return filmCategory;
};