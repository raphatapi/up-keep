'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Categories', {
    catName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Category.hasMany(models.Tasks);
      }
    }
  });
  return Category;
};