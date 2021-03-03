'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('Usuario_has_endereco', {
      fk_id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model:'Usuario',
          key:'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    fk_id_endereco:{
        type: Sequelize.INTEGER,
        references: {
          model:'Endereco',
          key:'id_endereco'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'      
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Usuario_has_endereco');

  }
};
