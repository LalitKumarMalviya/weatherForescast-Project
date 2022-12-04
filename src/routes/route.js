const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.post('/weather', controller.weatherDetails)

module.exports = router