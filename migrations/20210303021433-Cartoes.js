'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('cartoes',{
      id_cartao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },bandeira_cartao:{
        type: Sequelize.STRING
    },numero_cartao:{
        type: Sequelize.INTEGER
    },nome_cartao:{
        type: Sequelize.STRING
    },data_validade_cartao:{
        type: Sequelize.DATE
    },cod_cartao:{
        type: Sequelize.TINYINT
    },data_inclusao_cartao:{
        type: Sequelize.DATE
    },status_cartao:{
        type: Sequelize.INTEGER
    }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('cartoes');

  }
};
