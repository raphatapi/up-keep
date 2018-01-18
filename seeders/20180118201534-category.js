'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Category', [
      {catName: 'Plumbing', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'HVAC', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'Electrical', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'Landscaping', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'General home maintenance', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'Painting', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Category', null, {truncate : true});
  }
};
