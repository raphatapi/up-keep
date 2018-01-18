'use strict';
module.exports = (sequelize, DataTypes) => {
  var Skills = sequelize.define('Skills', {
    skillLevel: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Skills;
};