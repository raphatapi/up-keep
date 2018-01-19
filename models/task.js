'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Tasks', {
    task: DataTypes.STRING,
    description: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    imageLink: DataTypes.STRING,
    timeFrame: DataTypes.STRING,
    category: DataTypes.STRING,
    skillLevel: DataTypes.STRING,
    internetSearch: DataTypes.STRING
  });

  Task.associate = function(models) {
    Task.hasOne(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
    Task.hasOne(models.Skills, {
      foreignKey: {
        allowNull: false
      }
    });
    Task.hasOne(models.Season, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Task;
};