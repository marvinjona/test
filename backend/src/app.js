const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('path');

//OBTENIENDO LA CONEXION A LA BASE DE DATOS
require('./database');

const app = express();

const clave = require('./config');

const routes = require('./routes/router');

//CONFIGURACIONES
//INICIALIZANDO VARIABLE DEL PUERTO
app.set('port', process.env.PORT || 4000);
//INICIALIZANDO LA VARIABLE DE ENCRIPTACION 
app.set('tokenSecreto', clave.secret);

//MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());
//MODULO PARA PERMITIR LA CONEXION ENTRE 2 SERVIDORES
app.use(cors({origin: 'http://localhost:3000'}))

//RUTAS
app.use('/', routes);

//INICIANDO SERVIDOR
app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'));
});