const mongoose = require('mongoose');

//URL DE LA BASE DE DATOS DE MONGODB
const URI = 'mongodb://localhost/UbiMed';

//CONECCION A LA BASE DE DATOS DE MONGODB
mongoose.connect(URI, { useNewUrlParser: true }, { useUnifiedTopology: true } )
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));

//EXPORTANDO EL MODULO MONGOOSE A LA APLICACION 
module.exports = mongoose;