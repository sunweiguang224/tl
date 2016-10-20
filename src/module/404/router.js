var express = require('express');
var request = require('../../../server/request.js');

var router = express.Router();

router.get('*', function(req, res, next){
  res.render('module/404/404.html');
});

module.exports = router;
