'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    task: DataTypes.STRING,
    description: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    imageLink: DataTypes.STRING,
    timeFrame: DataTypes.STRING,
    category: DataTypes.STRING,
    skillLevel: DataTypes.STRING,
    internetSearch: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};