const router = require('express-promise-router')();

const { index } = require('../controllers/indexCtrl');
const { admin } = require('../controllers/adminCtrl');

const { login } = require('../middlewares/login');
const { veryjwt } = require('../middlewares/veryjwt');

const { alluser, oneuser, insertuser, updateuser, deleteuser } = require('../controllers/userCtrl');

//RUTA COMPROBACION
router.post('/login', login)

//RUTAS USUARIOS
router.get('/users', veryjwt, alluser);
router.get('/users/:id', veryjwt, oneuser);
router.post('/users', veryjwt, insertuser);
router.put('/users/:id', veryjwt, updateuser);
router.delete('/users/:id', veryjwt, deleteuser);

module.exports = router;