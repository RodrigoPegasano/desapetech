'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('produto',{
      id_produto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      preco_produto: Sequelize.FLOAT,
      quantidade_produto: Sequelize.INTEGER,
      tipo_produto: Sequelize.STRING,
      descricao_produto: Sequelize.STRING,
      data_criacao_produto: Sequelize.DATE,
      data_atualizacao_produto: Sequelize.DATE,
      status_produto: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('produto');

  }
};
