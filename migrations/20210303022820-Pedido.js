'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('pedidos', {
      id_pedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    data_solicitacao_pedido:{
        type: Sequelize.DATE            
    },
    data_atualizacao_pedido:{
        type: Sequelize.DATE            
    },
    status_do_pedido:{
        type:Sequelize.STRING,
    },
    numero_pedido:{
        type:Sequelize.INTEGER,
    },
    fk_id_usuario:{
      type:Sequelize.INTEGER,
      references:{
        model: 'Usuario',
        key: 'id_usuario'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('pedidos');
    
  }
};
