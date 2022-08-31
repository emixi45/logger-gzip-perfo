const router = require('express').Router()
const {homeGet, infoGet, randomsGet, pageNotFound} = require('../controllers/index.controller')
const {middleLoggerInfo, middleLoggerWarn} = require('../middlewares/logger')

router.get('/', middleLoggerInfo, homeGet)

router.get('/info', middleLoggerInfo, infoGet)

router.get('/api/randoms', middleLoggerInfo, randomsGet)

router.get('*', middleLoggerWarn, pageNotFound)

module.exports = router