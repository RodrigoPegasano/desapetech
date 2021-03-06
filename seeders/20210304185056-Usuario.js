'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuario',
      [
        {
          nome: 'Kurt',
          sobrenome: 'Cobain',
          email: 'test1@medium.com',
          data_nascimento: '1990-12-31 23:59:59',
          sexo: 'masculino',
          data_criacao_usuario: '1',
          data_atualizacao_usuario: '1',
          senha_usuario: '123456',
        },
        {
          nome: 'Elvis',
          sobrenome: 'Presley',
          email: 'test2@medium.com',
          data_nascimento: '1990-12-31 23:59:59',
          sexo: 'masculino',
          data_criacao_usuario: '1',
          data_atualizacao_usuario: '1',
          senha_usuario: '123456',
        },
      ],
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  },
};