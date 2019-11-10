const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config')

module.exports = {

    login: async (req, res) => {
        const { nombre, password } = req.body;
        const user = await User.findOne({nombre: nombre}); 
        if (!user) {
            return res.status(404).send('El usuario no existe')
        } 

        const passwordValid = await user.validatePassword(password); 
        if (!passwordValid) {
         res.status(404).send('sin un token')
        }

        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        });
        
        res.json({logeado: true, token})
    },

};