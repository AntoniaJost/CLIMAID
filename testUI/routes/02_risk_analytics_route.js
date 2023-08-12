const express = require('express')
var router = express.Router(); 

//get router for result page of own calculations
router.get('/', function(req, res, next)
{
    res.render('02_risk_analytics', {title: 'Risk Report'})
}); 

module.exports = router;