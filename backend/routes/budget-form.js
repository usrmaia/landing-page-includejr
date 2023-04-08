var express = require('express');
var router = express.Router();
var api = require('./../SendGridAPI')

/* GET users listing. */
router.post('/', function(req, res, next) {
  const messageHTML = req.body;

  if (!messageHTML) return res.status(400);

  api(messageHTML);
  res.send("HTML message successfully received!");
  res.status(200);
});

module.exports = router;
