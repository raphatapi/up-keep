'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Skills', [
      {skillLevel: 'beginner', createdAt: new Date(), updatedAt: new Date()},
      {skillLevel: 'intermediate', createdAt: new Date(), updatedAt: new Date()},
      {skillLevel: 'expert', createdAt: new Date(), updatedAt: new Date()},
      {skillLevel: 'professional', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Skills', null, {truncate : true});
	}
};
