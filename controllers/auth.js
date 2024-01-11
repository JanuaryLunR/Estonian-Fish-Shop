const { registerUser, loginUser } = require('../services/auth.service');

const register = async (req, res, next) => {
    try {
        await registerUser(req.body)

        return res.status(200).json({ message: 'Registered' });
    } catch (error) {
        return res.status(500).json({ message: `We have problems: ${error}` });
    }
};

const login = async (req, res, next) => {
    try {
        const { token } = await loginUser(req.body)
        return res.json({
            token,
        });
    } catch (error) {
        return res.status(500).json({ message: `We have problems: ${error}` });
    }
}

module.exports = {
    register,
    login,
};