'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {catName: 'Plumbing', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'HVAC', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'Electrical', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'Landscaping', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'General home maintenance', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'Painting', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {truncate : true});
  }
};
