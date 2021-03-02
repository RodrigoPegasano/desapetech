'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('teste', {
      teste12: {
        type: Sequelize.INTEGER}
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('teste');
    
  }
};
