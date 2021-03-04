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
        type:Sequelize.STRING
    },
    fk_id_usuario:{
        type:Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    fk_id_status_venda:{
        type:Sequelize.INTEGER,
        references: {
          model: 'Status_venda',
          key: 'id_status_venda'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('venda');
  }
};
