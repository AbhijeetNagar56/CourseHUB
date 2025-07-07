var express = require('express');
var router = express.Router();



router.get('/', (req, res) => {
  res.send('This the Users Profile');
});

router.get('/login', (req, res) => {
  res.send('welcome user');
});

router.get('/termsandservice', (req, res) => {
  res.send('all these are coming soon');
});

module.exports = router;
