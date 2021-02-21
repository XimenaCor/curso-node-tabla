const argv = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: true,
                            default: false,
                            describe: 'Lista la tabla generada'
                        })
                        .option('h', {
                            alias: 'hasta',
                            type: 'number',
                            demandOption: true,
                            default:5,
                            describe: 'Define el limite de la tabla'
                        })
                        .check( (argv, options) => {
                            if ( isNaN( argv.b )) {
                                throw 'La base tiene que ser un numero'
                            }
                            return true
                        })
                        .argv;

module.exports = argv;