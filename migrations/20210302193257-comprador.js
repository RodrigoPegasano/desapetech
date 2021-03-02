'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('comprador', {
      id_comprador: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },status_comprador:{
        type: Sequelize.INTEGER            
    },fk_id_usuario:{
        type:Sequelize.INTEGER,
    }
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('comprador');
  }
};
