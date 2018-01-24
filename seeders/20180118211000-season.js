'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Seasons', [
      {timeFrame: 'annually', createdAt: new Date(), updatedAt: new Date()},
      {timeFrame: 'fall', createdAt: new Date(), updatedAt: new Date()},
      {timeFrame: 'spring', createdAt: new Date(), updatedAt: new Date()},
      {timeFrame: 'all seasons', createdAt: new Date(), updatedAt: new Date()},
      {timeFrame: 'summer', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seasons', null, {truncate : true});
  }
};
