var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FLDSMDFR', message: 'Buy This Cool Machine!' });
});

module.exports = router;
