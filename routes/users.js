var express = require('express')
var router = express.Router();

var MC = require('../controllar/home2')

router.post('/createdata1', MC.createdata1)

module.exports = router