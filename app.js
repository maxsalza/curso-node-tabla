const { tablas } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

console.log(argv)


tablas(argv.base, argv.l, argv.h)
    .then( archivo => console.log(archivo, 'creado'))
    .catch(err => console.log(err));