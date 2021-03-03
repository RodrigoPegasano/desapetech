'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('produto_has_pedido', {
      
      fk_id_pedido: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pedido',
          key: 'id_pedido'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'id_usuario',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        fk_id_status_pedido: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Status_pedido',
            key: 'id_status_pedido'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      }
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('produto_has_pedido');

  }
};
