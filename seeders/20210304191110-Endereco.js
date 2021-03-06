'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'endereco',
      [
        {
          endereco: 'Rua Paulo Nunes Felix',
          numero_endereco: '682',
          complemento_endereco: '',
          cep_endereco: '08320-370',
          bairro_endereco: 'Parque São Rafael',
          uf_endereco: 'SP',
          cidade_endereco: 'São Paulo',
        },{
          endereco: 'Rua Victório Santim',
          numero_endereco: '3086',
          complemento_endereco: '804 C',
          cep_endereco: '08290-001',
          bairro_endereco: 'Vila Carmosina',
          uf_endereco: 'SP',
          cidade_endereco: 'São Paulo',
        },
      ],
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('endereco', null, {});
  },
};