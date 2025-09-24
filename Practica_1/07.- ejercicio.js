// 7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
// elementos de un arreglo, mediante desestructuración.
const arreglo = [10, 2, -59, 40, 8];
const [, , ...resto] = arreglo;
console.log(resto);
