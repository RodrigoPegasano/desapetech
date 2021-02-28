'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('usuarios',{
      idUsuario: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true
      },
      emailUsuario: Sequelize.STRING,
      nomeUsuario: Sequelize.STRING,
      nomeSobreUsuario: Sequelize.STRING,
      rgUsuario: Sequelize.INTERGER,
      cpfUsuario: Sequelize.INTERGER,
      celularUsuario: Sequelize.INTERGER,
      senhaUsuario: Sequelize.STRING,
      cepUsuario: Sequelize.INTERGER,
      enderecoUsuario: Sequelize.STRING,
      numeroEnderecoUsuario: Sequelize.INTERGER,
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
