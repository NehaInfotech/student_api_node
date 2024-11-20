var express = require('express')
var router = express.Router();

var MC = require('../controllar/home2')

router.post('/createdata1', MC.createdata1)
router.get('/showdata1', MC.showdata1)
router.get('/deletedata1/:id', MC.deletedata1)

module.exports = router