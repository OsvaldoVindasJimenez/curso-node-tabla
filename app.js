

const { argv } = require("./config/yargs.js");
const { crearAchivo } = require(`./helpers/multiplicar.js`);
// const { type } = require('node:os');



console.clear();
const colors = require('colors');

console.log(`argv.hasta`);
console.log(argv.hasta);
console.log(`argv.hasta`);

crearAchivo(argv.base, argv.L, argv.hasta)
    .then(nombreAchivo => console.log(` ${nombreAchivo} Ready`.green))
    .catch(err => console.log(err));

// console.log(process.argv);

// console.log(argv);

// console.log(`Base: yargs = `, argv.base);






// const informacionQueVaALaConsulta = process.argv;

// // aqui retorna, 1 la ruta de donde esta instalado el node
// // 2 la ruta de mi aplicacion
// // si le manda cualuier otro texto, ese texto

// console.log(informacionQueVaALaConsulta);




// const [,,arg3 = `base=5`] = process.argv;
// const [, numBase = 5]= arg3.split(`=`);
// const base = numBase;







