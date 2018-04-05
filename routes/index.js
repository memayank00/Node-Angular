var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('this is index javascript');

  res.render('index', { title: 'Express' });
});
router.get('/indexTest', function(req, res, next) {
	console.log('this is indexTest javascript');

  res.render('index', { title: 'Express indexTest' });
});
router.get('/chat', function(req, res, next) {
	console.log('this is made for chat application');
	

  // res.render('chat', { title: 'this is made for chat application' });
  res.sendFile(path.resolve('./public/index.html'));
});
module.exports = router;
