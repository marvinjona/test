const User = require('../models/user');

module.exports = {

    alluser: async (req, res, next) => {
        const users = await User.find({});
        res.json(users);
    },

    oneuser: async (req, res, next) => {
        const user = await User.findById(req.params.id);
        res.json(user);
    },

    insertuser: async (req, res, next) => {
        const { nombre, password } = req.body;
        const user = new User ({ nombre, password });
        
        user.password = await user.encryptPassword(user.password);

        await user.save();
        res.json({status: 'recivido'});
    },

    updateuser: async (req, res, next) => {
        const { nombre, password } = req.body;
        const newUser = { nombre, password };
        await User.findByIdAndUpdate(req.params.id, newUser, {useFindAndModify: false});
        res.json({status: 'Usuario Actualizado'})
    },

    deleteuser: async (req, res, next) => {
        await User.findByIdAndRemove(req.params.id);
        res.json({status: 'Usuario Eliminado'});
    }

};