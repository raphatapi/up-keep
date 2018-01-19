'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Seasons', [
      {timeName: 'Annually', createdAt: new Date(), updatedAt: new Date()},
      {timeName: 'Fall', createdAt: new Date(), updatedAt: new Date()},
      {timeName: 'Spring', createdAt: new Date(), updatedAt: new Date()},
      {timeName: 'All seasons', createdAt: new Date(), updatedAt: new Date()},
      {timeName: 'Summer', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seasons', null, {truncate : true});
  }
};
