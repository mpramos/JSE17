
console.log('hola');
console.log('como estas');
console.log('adios')

console.log('hola');
setTimeout(() => {
    console.log('como estas');
    console.log('adios')
}, 2000);

console.log('hola');
setTimeout(() => {
    console.log('como estas');
    
}, 2000);
console.log('adios');
console.log('fin del programa');
//Que son las promesas en JavaScript
//Las promesas son objetos que representan la finalización o el fracaso de una operación asíncrona.
// Creacion de una promesa

const miPromesa = new Promise((resolve, reject) => {
    let exito=true // Cambia esto a false para ver el rechazo

    setTimeout(()=>{
        if (exito) {
            resolve('La operacion fue exitosa')
        } else {
            reject('Hubo un error en la operacion')
        }
    },2000)
})

// uso de then y catch para manejar la promesa
miPromesa
.then(texto=> console.log(texto))
.catch(error=> console.log(error))

// 2 uso de async y await
// Las funciones async nos permiten excribir codigo asincrono de una forma mas sencilla


async function obtenerDatos(){
    try {
        console.log('Esperando datos...');
        let resultado= await miPromesa; // Espera a que la promesa se resuelva
        console.log(resultado);
        
    } catch (error) {
        console.log(error);
    }
}
// Llamada a la funcion async
obtenerDatos();

fetch('https://fakestoreapi.com/products')
.then(respuesta=> respuesta.json())
.then(data=> console.log(data)
)