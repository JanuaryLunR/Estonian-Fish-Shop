require('dotenv').config();

const config = {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    mongoUrl: process.env.MONGO_URL,
}

module.exports = config