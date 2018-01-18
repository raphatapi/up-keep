'use strict';
module.exports = (sequelize, DataTypes) => {
  var Season = sequelize.define('Season', {
    timeName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Season;
};