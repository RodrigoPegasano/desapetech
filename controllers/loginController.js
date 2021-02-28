let loginController = {
    renderizar: function(req, res, next) {
        res.render('login', { title: 'Login' });
      }
}

module.exports = loginController;