'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('vendedor', {
      id_vendedor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }, status_vendedor: {
        type: Sequelize.INTEGER
      }, fk_id_usuario: {
        type: Sequelize.INTEGER
      }
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('vendedor');

  }
};
