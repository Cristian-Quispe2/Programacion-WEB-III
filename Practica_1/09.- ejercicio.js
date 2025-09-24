// 9.- Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.
const miPromesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hola mundo");
    }, 3000);
});
miPromesa.then((mensaje) => {
    console.log(mensaje);
});
