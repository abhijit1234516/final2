var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.redirect('https:www.google.com');
});

module.exports = router;
