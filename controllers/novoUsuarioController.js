let novoUsuarioController = {
    renderizar: function(req, res, next) {
        res.render('novoUsuario', { title: 'Novo Usuario' });
      }
}

module.exports = novoUsuarioController;