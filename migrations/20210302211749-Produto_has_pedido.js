'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('produto_has_pedido', {
      fk_id_produto: {
        type: Sequelize.INTEGER,
    },fk_id_pedido:{
        type: Sequelize.INTEGER            
    }
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('produto_has_pedido');
    
  }
};
