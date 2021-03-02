'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('usuarios',{
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      data_nascimento: Sequelize.DATE,
      sexo: Sequelize.STRING,
      data_criacao_usuario: Sequelize.INTEGER,
      data_atualizacao_usuario: Sequelize.INTEGER,
      senha_usuario: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('usuarios');

  }
};
