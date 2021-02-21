const fs = require('fs');
const colors = require('colors');

//trabajndo la funcion en forma de promesa
// const crearArchivo = ( base = 5 ) => {

//     return new Promise( (resolve, rejact ) => {
//         console.log('=================================');
//         console.log('TABLA DEL: ', base);
//         console.log('=================================');
    
//         let salida = '';
//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} * ${index} -> ${base*index}\n`;
//         }
//         console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//         resolve(`tabla del ${base}.txt`);
//     })
// }


//trabajndo la funcion en forma de async-await lo que me devuelve una promesa
const crearArchivo = async( base = 5, listar = false, hasta = 5 ) => {
    try {
        let salida, consola = '';
        for (let index = 1; index <= hasta; index++) {
            //salida original
            salida += `${base} * ${index} -> ${base*index}\n`;
            //salida dandole colores a la tabla
            consola += `${base} ${'x'.green} ${index} ${'->'.green} ${base*index}\n`;
        }
        if (listar) {
            console.log('================================='.green);
            console.log('TABLA DEL: '.green, colors.blue(base), 'hasta el '.green, hasta);
            console.log('================================='.green);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla del ${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}