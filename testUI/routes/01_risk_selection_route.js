const express = require('express')
var router = express.Router(); 

//get router for result page of own calculations
router.get('/', function(req, res, next)
{
    res.render('01_risk_selection', {title: 'Risk Assessment'})
}); 

module.exports = router;