


seccion bases de node, en los capitulos de recibir informacion desde linea de comandos, y pacaje json son muy inmportantes o muy valiosos

ejemplo
const {crearAchivo} = require(`./helpers/multiplicar.js`);


console.clear();


const informacionQueVaALaConsulta = process.argv;

// aqui retorna, 1 la ruta de donde esta instalado el node
// 2 la ruta de mi aplicacion 
// si le manda cualuier otro texto, ese texto

console.log(informacionQueVaALaConsulta);




const [,,arg3 = `base=5`] = process.argv;
const [, numBase = 5]= arg3.split(`=`);



const base = numBase;


Paquete de colores para el terminal:
https://www.npmjs.com/package/colors

estos pasos hay que hacerlos en todos los proyectos de Node de ahora en adelante:

Este comando es para crear mi pacage .jason
npm int

--------------------------------------------------------


En los scripts de el package. json se pueden resumir comandos para no equivocarlos ejemplo:

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "base3": "node app.js --base=3"
  }
  
