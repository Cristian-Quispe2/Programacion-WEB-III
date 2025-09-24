// 14.- Proporcione un ejemplo para convertir una promesa en un callback
const obtenerNumero = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}
const obtenerCallback = (callback) => {
    obtenerNumero()
        .then(numero => {
            callback(null, numero);
        })
        .catch(error => {
            callback(error);
        });
}
obtenerCallback((error, numero) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Número obtenido:', numero);
    }
});
