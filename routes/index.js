var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next){
  var nome = req.body.nomeCliente;
  var email = req.body.emailCliente;
  console.log(nome, email)
});
module.exports = router;
