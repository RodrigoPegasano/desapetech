let produtoController = {
    renderizar: function(req, res, next) {
        res.render('produto', { title: 'produto' });
      }
}

module.exports = produtoController;