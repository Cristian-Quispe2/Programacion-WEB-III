// 1.- Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto.
const miFuncion = (x) => {
    const objeto = {
        a: 0, e: 0, i: 0, o: 0, u: 0
    };
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "a")
            objeto.a++;
        if (x[i] === "e")
            objeto.e++;
        if (x[i] === "i")
            objeto.i++;
        if (x[i] === "o")
            objeto.o++;
        if (x[i] === "u")
            objeto.u++;
    }
    return objeto;
}
let obj = miFuncion("euforia");
console.log(obj);
