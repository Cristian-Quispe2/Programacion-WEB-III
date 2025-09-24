// 11.- Proporcione un ejemplo concreto de encadenamiento de promesas.
// R.- El encadenamiento de promesas es una tecnica en Javascript que permite ejecutar múltiples operaciones asincronas en
// secuencia, donde cada operación se realiza despues de que la anterior se haya completado.
// Ejemplo
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
        console.log('Resultado de la primera promesa:', numero);
        return sumarDos(numero);
    })
    .then(resultado => {
        console.log('Resultado despues de encadenar la promesa:', resultado);
    })
    .catch(error => {
    });
