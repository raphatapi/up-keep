'use strict';
module.exports = (sequelize, DataTypes) => {
  var Skills = sequelize.define('Skills', {
    skillLevel: DataTypes.STRING
  });
  return Skills;
};