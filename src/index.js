const express = require('express')
const app = express()
const route = require('./routes/route')

app.use(express.json())

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on PORT', process.env.PORT || 3000)
})