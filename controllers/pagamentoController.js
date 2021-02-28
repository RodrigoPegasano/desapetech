let pagamentoController = {
    renderizar: function(req, res, next) {
        res.render('pagamento', { title: 'Pagamento' });
      }
}

module.exports = pagamentoController;