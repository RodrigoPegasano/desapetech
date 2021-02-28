let carrinhoController = {
    renderizar: function(req, res, next) {
        res.render('carrinho', { title: 'Carrinho' });
      }
}

module.exports = carrinhoController;