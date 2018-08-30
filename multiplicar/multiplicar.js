const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });

    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= limite; i++) {
            resolve(console.log(`${base} * ${i} = ${base * i}\n`.red))
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}