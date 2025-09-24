// 4.- Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto.
const miFuncion = (x) => {
    const objeto = {
        mayor: -1000,
        menor: 1000
    };
    for (let i = 0; i < x.length; i++){
        if (x[i] > objeto.mayor)
            objeto.mayor = x[i];
        if(x[i] < objeto.menor)
            objeto.menor = x[i];
    }
    return objeto;
}
let obj = miFuncion([3,1,5,4,2])
console.log(obj);     // { mayor: 5, menor: 1 }
