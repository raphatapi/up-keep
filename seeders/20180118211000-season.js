'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Seasons', [
      {timeName: 'annually', createdAt: new Date(), updatedAt: new Date()},
      {timeName: 'fall', createdAt: new Date(), updatedAt: new Date()},
      {timeName: 'spring', createdAt: new Date(), updatedAt: new Date()},
      {timeName: 'all seasons', createdAt: new Date(), updatedAt: new Date()},
      {timeName: 'summer', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seasons', null, {truncate : true});
  }
};
