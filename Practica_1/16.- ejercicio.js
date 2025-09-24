// 16.- Proporcione un ejemplo para migrar una función con promesas a async/await.
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
