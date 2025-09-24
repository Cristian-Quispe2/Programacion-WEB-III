// 12.- Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
// reescribir mejor con async/await haciendo el código más limpio y mantenible.

// EJEMPLO CON CALLBACKS
/*
const obtenerNumero = (callback) => {
    setTimeout(() => {
        callback(5);
    }, 1000);
}

const sumarDos = (numero, callback) => {
    setTimeout(() => {
        callback(numero + 2);
    }, 1000);
}

obtenerNumero((numero) => {
    console.log('Número obtenido:', numero);
    sumarDos(numero, (resultado) => {
        console.log('Resultado despues de sumar 2:', resultado);
    });
});
*/

// REESCRITO ASYNC/AWAIT
const obtenerNumero = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}

const sumarDos = (numero) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero + 2);
        }, 1000);
    });
}

async function ejecutar() {
    try {
        const numero = await obtenerNumero();
        console.log('Número obtenido:', numero);
        const resultado = await sumarDos(numero);
        console.log('Resultado despues de sumar 2:', resultado);
    } catch (error) {
        console.error('Error:', error);
    }
}
ejecutar();
