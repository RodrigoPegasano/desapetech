'use strict';

const bcrypt = require('bcrypt');
const faker = require('faker/locale/pt_BR');
const moment = require('moment');
const date = new Date();


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuario',
      [
        {
          nome: faker.name.firstName(),
          sobrenome: faker.name.lastName(),
          email: faker.internet.email(),
          data_nascimento: faker.date.recent(),
          sexo: 'masculino',
          data_criacao_usuario: faker.date.between('1990-01-01', '1990-01-01'),
          data_atualizacao_usuario: faker.date.between('1999-01-01', '1999-01-01'),
          senha_usuario: bcrypt.hashSync('12345678', 10),
        },
      ],
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  },
};