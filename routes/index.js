var express = require('express')
var router = express.Router();

var SC = require('../controllar/home')

router.post('/createdata', SC.createdata)
router.get('/showdata', SC.showdata)
router.delete('/deletedata/:id', SC.deletedata)
// router.patch('/updatedata/:id', SC.updatedata)

module.exports = router