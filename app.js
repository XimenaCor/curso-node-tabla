const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

//Aunquee colors continue desmarcado si lo estoy utilizando solo que no llamo al metodo
//seria para el caso de color lo mismo: require('colors')
const colors = require('colors');

console.clear();

//este codigo no es muy eficiente ya que la manipulacion de la base es muy forzada
 // const [ , , arg3 = 'base=5'] = process.argv;
 // const [ , base = 5 ] = arg3.split('=');
 console.log('base: yargs ', argv.base);

//const base = 3;
//crearArchivo(base);

//si quisieramos trabajar la funcion crearArchivo como una promesa, la forma de
//ejecutarlo seria:
//la sig ejecucio aplica tanto si es promesa o async-await por que el mismo devuelve una promesa
  crearArchivo( argv.base, argv.listar, argv.hasta )
      .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
      .catch( err => console.log(err));
