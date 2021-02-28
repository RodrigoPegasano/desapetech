let alterarEnderecoController = {
    renderizar: function(req, res, next) {
        res.render('alterarEndereco', { title: 'Alterar Endereço' });
      }
}

module.exports = alterarEnderecoController;