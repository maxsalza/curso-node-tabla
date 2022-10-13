/*IMPORTAMOS EL FILESYSTEM*/

const fs = require('fs');
const colors = require('colors');

let salida = '';


const tablas = (numero = 5, l,h) => {

    return new Promise((resolve, reject) => {

        
        
        for (let x = 0; x <= h; x++) {
            salida += `${x} `+colors.cyan(`x`)+` ${numero} = ${x * numero}\n`
        }
        if(l){
            console.log(colors.yellow(`===============`))
            console.log(colors.red.underline(`Tabla del: ${numero}`))
            console.log(colors.yellow(`===============`))
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/Tabla - ${numero}.txt`, salida)

        resolve (`Tabla - ${numero}.txt`)

    })
}

module.exports = {
    tablas: tablas
}