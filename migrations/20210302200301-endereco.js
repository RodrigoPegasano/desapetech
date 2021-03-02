'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('endereco', {
      id_endereco: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },endereco:{
        type: Sequelize.STRING            
    },numero_endereco:{
        type: Sequelize.INTEGER            
    },complemento_endereco:{
        type: Sequelize.STRING                       
    },cep_endereco:{
        type: Sequelize.STRING                       
    },bairro_endereco:{
        type: Sequelize.STRING                       
    },uf_endereco:{
        type: Sequelize.STRING                       
    },cidade_endereco:{
        type: Sequelize.STRING                       
    }
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('endereco');
    
  }
};
