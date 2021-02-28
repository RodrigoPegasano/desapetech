var express = require('express');
var router = express.Router();
var pagamentoController = require('../controllers/pagamentoController')

/* Rota Pagamento */
router.get('/pagamento', function(req, res, next) {
    res.render('pagamento', { title: 'Pagamento' });
});



module.exports = router;