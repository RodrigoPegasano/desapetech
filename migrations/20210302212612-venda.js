'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('venda', {
      id_venda: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    data_solicitacao_venda:{
        type: Sequelize.DATE            
    },
    data_atualizacao_venda:{
        type: Sequelize.DATE            
    },
    status_venda:{
        type: Sequelize.STRING
    },
    fk_id_usuario:{
        type: Sequelize.INTEGER
    },
    fk_id_status_venda:{
        type: Sequelize.INTEGER
    }
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('venda');
    
  }
};
