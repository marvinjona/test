const jwt = require('jsonwebtoken');

module.exports = {
    veryjwt: (req, res, next) => {
        const token = req.body.token || req.query.token || req.headers
    ['x-access-token'];
    if (token) {
        jwt.verify(token, req.app.get('tokenSecreto'), (err, decoded) => {
            if (err) {
                return res.json({ success: false, mensaje: 'atenticacion fallida'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            mensaje: 'el token no existe'
        });
    }
    }
}