'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('cartoes_has_usuario',{
      fk_id_usuario:  Sequelize.INTEGER,
      fk_id_endereco: Sequelize.INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('cartoes_has_usuario');
  }
};
