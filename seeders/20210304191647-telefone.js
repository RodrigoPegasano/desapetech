'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'telefone',
      [
        {
          tel_celular: '112011',
          tel_residencial: '119611',
          fk_id_usuario: 13
        },{
          tel_celular: '12311',
          tel_residencial: '12311',
          fk_id_usuario: 14
        },
      ],
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('telefone', null, {});
  },
};