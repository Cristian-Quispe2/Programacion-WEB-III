// 15.- Proporcione un ejemplo para convertir un callback en una promesa.
const obtenerNumero = (callback) =>{
    setTimeout(() => {
        callback(5);
    }, 1000);
}
const obtenerNumeroPromesa = () => {
    return new Promise((resolve, reject) => {
        obtenerNumero((numero) => {
            resolve(numero);
        });
    });
}
obtenerNumeroPromesa()
    .then(numero => {
        console.log('Numero obtenido:', numero);
    })
    .catch(error => {
        console.error('Error:', error);
    });
