// 5.- Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés).
const miFuncion = (x) =>{
    let x2 = '';
    for (let i = x.length-1; i >= 0; i--){
        x2 += x[i];
    }
    return x === x2;
}
let band = miFuncion("oruro")
console.log(band) // true
//let band = miFuncion("hola")
//console.log(band) // false
