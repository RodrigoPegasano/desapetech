'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('usuarios',{
      idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      emailUsuario: Sequelize.STRING,
      nomeUsuario: Sequelize.STRING,
      nomeSobreUsuario: Sequelize.STRING,
      rgUsuario: Sequelize.INTEGER,
      cpfUsuario: Sequelize.INTEGER,
      celularUsuario: Sequelize.INTEGER,
      senhaUsuario: Sequelize.STRING,
      cepUsuario: Sequelize.INTEGER,
      enderecoUsuario: Sequelize.STRING,
      numeroEnderecoUsuario: Sequelize.INTEGER,
      complementoEnderecoUsuario: Sequelize.STRING,
      bairroEnderecoUsuario: Sequelize.STRING,
      cidadeEnderecoUsuario: Sequelize.STRING,
      estadoEnderecoUsuario: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('usuarios');

  }
};
