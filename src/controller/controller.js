const { default: axios } = require("axios")

// require dotenv package...
require('dotenv').config()

// Set up API key
const API_KEY = process.env.API_KEY

const weatherDetails = async function (req, res) {
    try {
        let city = req.body.city

        let option = {
            method: 'post',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        }

        let result = await axios(option)
        res.status(200).send({ status: true, data: result.data })

    }

    catch (err) {
        return res.status(500).send({ status: false, error: err })
    }


}

module.exports = { weatherDetails }