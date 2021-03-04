'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('venda_has_produto', {
      fk_id_venda: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Venda',
          key: 'id_venda'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    fk_id_produto:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Produto',
          key: 'id_produto'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'       
    },
    venda_fk_id_usuario:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'           
    },
    venda_fk_id_status_venda:{
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
    queryInterface.dropTable('venda_has_produto');
  }
};
