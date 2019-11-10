const app = require('./app');

//CONFIGURACIONES
app.set('port', process.env.PORT || 4000);

async function main() {
    await app.listen(app.get('port'));
    console.log('Servidor corriendo en el puerto', app.get('port'))
}

main();