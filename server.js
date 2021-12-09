const express = require('express')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000
const bootcamps = require('./routes/bootcamps.js')

dotenv.config({path: "./config/config.env"})

const app = express()

app.use('/api/v1/bootcamps', bootcamps)


app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode in ${PORT}`))