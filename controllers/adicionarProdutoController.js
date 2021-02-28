let adicionarProdutoController = {
    renderizar: function(req, res, next) {
        res.render('adicionarProduto', { title: 'Adicionar Produto' });
      }
}

module.exports = adicionarProdutoController;