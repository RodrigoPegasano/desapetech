let usuarioLogadoController = {
    renderizar: function(req, res, next) {
        res.render('usuarioLogado', { title: 'Usuario Logado' });
      }
}

module.exports = usuarioLogadoController;