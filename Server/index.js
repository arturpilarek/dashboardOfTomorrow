const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./src/router')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors(
    {
    origin: "*"
    }
))
app.use(morgan('tiny'))

app.use(router)

// Uncomment this to connect to MongoDB

mongoose.connect(process.env.MONGO_ENDPOINT).then(() => {
    console.log('server connected to mongo, port8081')
    app.listen(8081)
})


// Server without MongoDB
// app.listen(8081, () => {
//     console.log('server connected, port8081')
// }
// )