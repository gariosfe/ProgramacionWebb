var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var nombre= req.query.nombre
  res.send('Hola ' +nombre+ ' como estas');
});

router.post('/id', function(req, res, next) {
  console.log(req.body);
  var nombre= req.body.nombre
  res.send('Hola ' +nombre+ ' como estas');
});

router.post('/suma', function(req, res, next) {
  console.log(req.body);
  var dato1 = parseInt(req.body.dato1);
  var dato2 = parseInt(req.body.dato2);
  var dato3 = dato1 + dato2;
  res.send('La suma es:' +dato3+ 'esta bien?');
});

router.post('/letras', function(req, res, next){
  console.log(req.body);
  var nombre = req.body.nombre;
  const conteoletras = (text) => {
    const letters = text.replace(/[^a-zA-Z]/g, '');
    return letters.length;
  };
  const countConsonants = (text) => {
    const consonants = text.replace(/[^a-zA-Z]/g, '').replace(/[aeiouAEIOU]/g, '');
    return consonants.length;
  };
  var letras = conteoletras(nombre);
  var consonantes = countConsonants(nombre);
  res.send('letras:'+letras+ ', consonantes:'+ consonantes);
});

module.exports = router;
