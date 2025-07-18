// Programacion orientada a objetos en JavaScript
// La programacion orientada a objetos es un paradigma de programacion que utiliza objetos para representar     
// datos y comportamientos. En JavaScript, los objetos son colecciones de propiedades y metodos que pueden ser
// utilizados para modelar entidades del mundo real. La programacion orientada a objetos permite la
// encapsulacion, la herencia y el polimorfismo, lo que facilita la organizacion y reutilizacion del codigo.
// En JavaScript, los objetos se pueden crear utilizando la sintaxis de objeto literal, constructors de funciones o clases.
// La encapsulacion se refiere a la ocultacion de los detalles internos de un objeto,   
// permitiendo que solo se acceda a ellos a traves de metodos publicos. La herencia permite que un objeto
// herede propiedades y metodos de otro objeto, lo que facilita la reutilizacion del codigo.


let gato3 = {
    nombre: "Blacky",
    edad: 3,
    color:'negro',
    maullar: function() {
        return 'miau!'
    }
}
console.log(gato3.maullar());


// console.log(`Nombre del gato es ${gato1.nombre} , La edad del gato ${gato1.edad}, El color del gato es ${gato1.color}`);

// let gato2={
//     nombre:'Bola de nieve',
//     edad:2,
//     color:'negro con blanco'
// }
// console.log(`Nombre del gato es ${gato2.nombre} , La edad del gato ${gato2.edad}, El color del gato es ${gato2.color}`);

class Gato {
    constructor(nombre, edad, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
    }

    maullar() {
        return(`${this.nombre} dice: Miau!`);
    }

    info() {
       return (`Gato: ${this.nombre}, Edad: ${this.edad} , Color: ${this.color}`);
    }
}

const gato1= new Gato('blacky',3,'negro')
console.log(`El nombre del gato es ${gato1.nombre} , tiene ${gato1.edad}, es de color ${gato1.color}`);
console.log(gato1.maullar());

const gato2= new Gato ('bola de nieve', 2, 'blanco con negro')
console.log(`El nombre del gato es ${gato2.nombre} , tiene ${gato2.edad}, es de color ${gato2.color}`);
console.log(gato2.maullar());




