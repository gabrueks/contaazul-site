var express = require('express');
var mongoose = require('mongoose');
var keys = require('../secrets/keys');
var router = express.Router();

var client = mongoose.model('clientes');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next){
  var nome = req.body.nomeCliente;
  var email = req.body.emailCliente;

  client.findOne({ email : email })
    .then((existingUser) => {
      if(existingUser){

      }else{
        new client({ nome: nome, email: email}).save();
      }
    })
});

module.exports = router;
