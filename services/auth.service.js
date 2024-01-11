const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const config = require('../config')
const User = require('../models/User')

const registerUser = async (data) => {
    const { email, password } = data;

    const candidate = await User.findOne({ email: email })

    if (candidate) {
        return res.status(400).json({ message: 'Already exist' })
    }

    const hashedPassword = await bcrypt.hash(password, 7)
    const user = new User({ email, password: hashedPassword })

    const savedUser = await user.save();

    return savedUser;
};

const loginUser = async (data) => {
    const { email, password } = data;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'Didnt find' })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'Something wrong!' })
    }

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        config.jwtSecret,
        { expiresIn: '24h' }
    )

    return { token }
};

module.exports = {
    registerUser,
    loginUser,
}