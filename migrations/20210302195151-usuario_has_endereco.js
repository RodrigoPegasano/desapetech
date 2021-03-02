'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('Usuario_has_endereco', {
      fk_id_usuario: {
        type: Sequelize.INTEGER
    },fk_id_endereco:{
        type: Sequelize.INTEGER            
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Usuario_has_endereco');

  }
};
