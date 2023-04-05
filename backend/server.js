require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const collectionRoutes = require('./routes/collections')

// express app
const app = express()
app.use(cors());

// middleware
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

// routes
app.use('/api/collections', collectionRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log("Server Ok!! with Port" + process.env.PORT);
        })
    })
    .catch(err => console.log(err))