const { request, response } = require('express')
const { logger } = require('../config/logger')

const middleLoggerInfo = (req = request, res = response, next) => {
    //todas las rutas y metodos se loggean info
    logger.info(`Ruta ${req.path} y método ${req.method}`)
    
    next()
}

const middleLoggerWarn = (req = request, res = response, next) => {
    // si llegan rutas o métodos inexistentes se loggea warning!
    logger.warn(`Ruta ${req.path} y/o método ${req.method} inexistente.`)
    next()
}

module.exports = { middleLoggerInfo, middleLoggerWarn }