'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      checked: {
        type: Sequelize.BOOLEAN
      },
      imageLink: {
        type: Sequelize.STRING
      },
      timeFrame: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      skillLevel: {
        type: Sequelize.STRING
      },
      internetSearch: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};