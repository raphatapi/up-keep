'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {category: 'plumbing', createdAt: new Date(), updatedAt: new Date()},
      {category: 'HVAC', createdAt: new Date(), updatedAt: new Date()},
      {category: 'electrical', createdAt: new Date(), updatedAt: new Date()},
      {category: 'landscaping', createdAt: new Date(), updatedAt: new Date()},
      {category: 'general home maintenance', createdAt: new Date(), updatedAt: new Date()},
      {category: 'painting', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {truncate : true});
  }
};
