'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('vendedor', {
      id_telefone: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },tel_celular:{
        type: Sequelize.INTEGER            
    },tel_residencial:{
        type: Sequelize.INTEGER            
    },fk_id_usuario:{
        type:Sequelize.INTEGER,
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('telefone');
  }
};
