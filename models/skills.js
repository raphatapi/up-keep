'use strict';
module.exports = (sequelize, DataTypes) => {
  var Skills = sequelize.define('Skills', {
    skillLevel: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Skills.hasMany(models.Task);
      }
    }
  });
  return Skills;
};