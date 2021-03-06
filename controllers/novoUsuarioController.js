const {Usuario} = require ('../models/')

let novoUsuarioController = {
    renderizar: function(req, res, next) {
        res.render('novoUsuario', { title: 'Novo Usuario' });
      },
      salvarDadosUsuario: async function(req, res, next) {
        const {senha, nome, email, cep } = req.body;
        const usuario = await Usuario.create({
          senha: bcrypt.hashSync( senha, 10 ),
          nome,
          email
        })
        
        // res.json(data);
        // res.render('novoUsuario', { title: 'Cadastrar Usuario' });
        
      }
}
    

module.exports = novoUsuarioController;