'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Categories', {
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Category.hasMany(models.Tasks);
      }
    }
  });
  return Category;
};