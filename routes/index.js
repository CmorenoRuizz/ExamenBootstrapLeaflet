var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Museos' });
});

router.get('/testleaflet', function(req, res, next) {
  res.render('testleaflet', { title: 'Prueba instalación' });
});

module.exports = router;
