'use strict';

module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define('Tasks', {
    task_name: DataTypes.STRING,
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
        Tasks.belongsTo(models.Category, {
          foreignKey: {
            allowNull: false
          }
        });
        Tasks.belongsTo(models.Season, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Tasks;
};
