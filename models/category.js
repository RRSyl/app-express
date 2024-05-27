'use strict';
const {Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      lastUpdate: {
        type: DataTypes.DATE
      }
  });

  category.associate = function(models) {
      category.belongsTo(models.filmCategory, {
          foreignKey: 'categoryId',
          as: 'category'
      });
  };

  return category;
};
