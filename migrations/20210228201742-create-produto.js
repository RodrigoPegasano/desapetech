'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('produtos',{
      idProduto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nomeProduto: Sequelize.STRING,
      precoProduto: Sequelize.FLOAT,
      quantidadeProduto: Sequelize.INTEGER,
      imagemProduto: Sequelize.STRING,
      descricaoProduto: Sequelize.STRING,
      produtoAtivo: Sequelize.BOOLEAN
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable('produtos');

  }
};
