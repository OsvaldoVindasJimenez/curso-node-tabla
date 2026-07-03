

const { alias, boolean, demandOption } = require('yargs');

const colors = require('colors');

const argv = require('yargs')
    .option(`b`,
        {
            alias: `base`,
            type: `number`,
            demandOption: true,
            describe: `La base nos da el valor de la base de la tabla de multiplicar que bamos a ver`.rainbow
        }
    )
        .option(`h`,
        {
            alias: `hasta`,
            type: `number`,
            default: 10,
            describe: `Esta opcion indica la a[plicacion de multiplos con que se va a multiplicar la base]`
        }
    )
    .option(`L`,
        {
            alias: `Listar`,
            type: `boolean`,
            default: false,
            describe: `Con la L de lista desidimos si se va a imprimir la tabla de multiplicar o si de lo contrario solo seva a crear`
        }
    )
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw `la base tiene que ser un numero`;
        }
        return true;

    })
    .argv;


    module.exports = {
        argv
    };