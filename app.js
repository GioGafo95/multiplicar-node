const argv = require('./config/yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(respuesta => console.log("Realizado con exito"))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado'))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido!');


}
//let base = '9';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log(argv.limite);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];