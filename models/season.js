'use strict';
module.exports = (sequelize, DataTypes) => {
  var Season = sequelize.define('Seasons', {
    timeName: DataTypes.STRING
  });
  return Season;
};