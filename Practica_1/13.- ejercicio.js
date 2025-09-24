// 13.- Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
// reescribir mejor con async/await haciendo el código más limpio y mantenible.

// Ejemplo con Anidamiento de Promesas
/*
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
obtenerNumero()
    .then(numero => {
        console.log('Número obtenido:', numero);
        return sumarDos(numero);
    })
    .then(resultado => {
        console.log('Resultado despues de sumar 2:', resultado);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    */

// Reescrito con async/await
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
        console.log('Numero obtenido:', numero);
        const resultado = await sumarDos(numero);
        console.log('Resultado despues de sumar 2:', resultado);
    } catch (error) {
        console.error('Error:', error);
    }
}
ejecutar();
