'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('status_pedido', {
      id_status_pedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    data_envio:{
        type: Sequelize.DATE            
    },
    data_status:{
        type: Sequelize.DATE 
    },
    numero_envio:{
        type:Sequelize.INTEGER,
    },
    tipo_envio:{
        type:Sequelize.STRING,
    },
    custo_envio:{
        type:Sequelize.INTEGER,
    },
    num_regiao_envio:{
        type:Sequelize.INTEGER,
    },
    });

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('status_pedido');
    
  }
};
