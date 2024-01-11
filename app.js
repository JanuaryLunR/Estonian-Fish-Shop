const express = require('express')
const mongoose = require('mongoose')
const {
    auth,
  } = require('./routes');

const config = require('./config')

const app = express()

app.use('/auth', auth)

async function start() {
    try {
        await mongoose.connect(config.mongoUrl, {})
        app.listen(config.port, () => {
            console.log(`Server startet at port: ${config.port}`)
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

