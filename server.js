const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./errorMiddleware/errorMiddleware')
const port = process.env.PORT || 5000

const connectDB = require('./config/db')
const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(errorHandler)

app.use('/api/goals',require('./routes/goalRoutes'))
app.listen(port, () => console.log(`server started on port ${port}`))

