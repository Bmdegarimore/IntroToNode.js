var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.render('helloworld', { title: 'Hello World' });
});

/* GET Userlist Page */
router.get('/userlist', function(req, res) {
 var db = req.db;
 var collection = db.get('users');
 collection.find({},{},function(e,docs){
  res.render('userlist', {
   "userlist" : docs
});
});
});

module.exports = router;
