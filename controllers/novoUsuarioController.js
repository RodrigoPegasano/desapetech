const {Usuario} = require ('../models/')
const bcrypt = require('bcrypt')
let novoUsuarioController = {
    renderizar: function(req, res, next) {
        res.render('novoUsuario', { title: 'Novo Usuario' });
      },

      salvarDadosUsuario: async function(req, res, next) {

        const endereco = await Endereco.create({
          endereco,
          numero_endereco,
          complemento_endereco,
          cep_endereco,
          bairro_endereco,
          uf_endereco,
          cidade_endereco

        })
        const usuario = await Usuario.create({
          email,
          nome,
          sobrenome,
          data_nascimento,
          sexo,
          password: bcrypt.hashSync( password, 10 )
        })

        const telefone = await Telefone.create({
          tel_celular,
          tel_residencial
        })
        
        // res.json(data);
        // res.render('novoUsuario', { title: 'Cadastrar Usuario' });
        
      }
}
    

module.exports = novoUsuarioController;