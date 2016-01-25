var express = require('express');
var router = express.Router();
var validate = require('../lib/validations');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {
  var errors = [];
  errors.push(validate.nameIsNotBlank(req.body.name));
  errors.push(validate.emailIsValid(req.body.email));
  errors.push(validate.phoneIsValid(req.body.phone));
  errors = errors.filter(function (error) {
    if (errors.length) {
      return errors.length;
      res.render('index');
    }
    else {
      res.send('You are so valid');
    }
  });
});



module.exports = router;
