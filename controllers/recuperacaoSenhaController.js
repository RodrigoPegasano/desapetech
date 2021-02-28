let recuperacaoSenhaController = {
    renderizar: function(req, res, next) {
        res.render('recuperacaoSenha', { title: 'Recuperação Senha' });
      }
}

module.exports = recuperacaoSenhaController;