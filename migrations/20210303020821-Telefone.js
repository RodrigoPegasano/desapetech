'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('telefone', {
      id_telefone: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },tel_celular:{
        type: Sequelize.INTEGER            
    },tel_residencial:{
        type: Sequelize.INTEGER            
    },fk_id_usuario:{
        type:Sequelize.INTEGER,
        references: {
          model:'Usuario',
          key: 'id_usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('telefone');
  }
};
