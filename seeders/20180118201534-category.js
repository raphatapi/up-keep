'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {catName: 'plumbing', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'HVAC', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'electrical', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'landscaping', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'general home maintenance', createdAt: new Date(), updatedAt: new Date()},
      {catName: 'painting', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {truncate : true});
  }
};
