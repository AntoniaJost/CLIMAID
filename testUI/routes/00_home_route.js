var express = require('express');
var router = express.Router();

//get router for homepage
router.get('/', function(req, res, next) 
{
  res.render('00_layout', { title: 'Homepage' });
});

module.exports = router;