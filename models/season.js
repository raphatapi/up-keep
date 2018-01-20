'use strict';
module.exports = (sequelize, DataTypes) => {
  var Season = sequelize.define('Seasons', {
    timeName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Season.hasMany(models.Task);
      }
    }
  });
  return Season;
};