var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact',name:'Abhijit'
  ,phone:9492330402});
});

module.exports = router;