'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('cartoes_has_usuario', {
      fk_id_cartoes: {
        type: Sequelize.INTEGER,
        references: {
          model:'Cartoes',
          key:'id_cartao'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    fk_id_usuario:{
        type: Sequelize.INTEGER,
        references: {
          model:'Usuario',
          key:'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('cartoes_has_usuario');

  }
};
