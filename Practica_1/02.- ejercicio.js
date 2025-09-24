// 2.- Crear una función que invierta el orden de las palabras en una frase.
const miFuncion = (x) => {
    let cadenainvertida = '';
    for (let i = x.length - 1; i >= 0; i--) {
        cadenainvertida += x[i];
    }
    return cadenainvertida;
}
let cad = miFuncion("abcd");
console.log(cad); // dcba
