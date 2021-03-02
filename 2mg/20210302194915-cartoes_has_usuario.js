'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('cartoes_has_usuario', {
      fk_id_usuario: {
        type: Sequelize.INTEGER
    },fk_id_endereco:{
        type: Sequelize.INTEGER
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('cartoes_has_usuario');

  }
};
