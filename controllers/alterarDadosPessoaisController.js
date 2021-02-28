let alterarDadosPessoaisController = {
    renderizar: function(req, res, next) {
        res.render('alterarDadosPessoais', { title: 'Alterar Dados Pessoais' });
      }
}

module.exports = alterarDadosPessoaisController;