var express = require('express');
var router = express.Router();
var path = require('path');  

/* GET home page. */
router.get('/home', function(req, res, next) {
	res.sendFile(path.resolve('views/index.html'));
});

router.get('/kartheek', function(req, res, next) {
	var kar ={"name":"kartheek"};
	res.json(kar);
	
});

router.get('*', function(req, res, next) {
	res.sendFile(path.resolve('index.html'));
});


module.exports = router;
