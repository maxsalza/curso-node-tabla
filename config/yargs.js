const argv = require('yargs')
                        .options({
                            'b': {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                        }
                    },
                    {
                        'l':{
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla por consola'
                        }
                    },
                    {
                        'h':{
                            alias: 'hasta',
                            type: 'number',
                            demandOption: true,
                            describe: 'Define la longitud de la tabla'
                        }
                    }
                    
                    )
                        .check((argv, options) => {
                            if(isNaN(argv.b)){
                                throw  'La Base tiene que ser un numero'
                            }
                            return true;

                        })
                        .argv;

module.exports = argv;                        