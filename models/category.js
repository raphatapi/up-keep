'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Categories', {
    catName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Category;
};