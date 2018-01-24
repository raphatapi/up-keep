'use strict';
module.exports = (sequelize, DataTypes) => {
  var Season = sequelize.define('Seasons', {
    timeFrame: DataTypes.STRING
  });
  return Season;
};