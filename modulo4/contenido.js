//? Contenido del Módulo 4: Flujo de Control - Ejecución Condicional y Bucles

//! 1. Enunciados Condicionales
// Los enunciados condicionales permiten ejecutar diferentes bloques de código basados en una condición. 
// La sintaxis más básica es:
// if (condición) {
     // Código a ejecutar si la condición es verdadera
// }
// Ejemplo:
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//! 2. La instrucción if
// La instrucción `if` evalúa una condición booleana.
// Ejemplo:
let numero = 10;
if (numero > 5) {
    console.log("El número es mayor que 5");
}

//! 3. El if...else
// La instrucción `if...else` ejecuta un bloque de código si la condición es verdadera, y otro si es falsa.
// Ejemplo:
let esEstudiante = 1;
if (esEstudiante) {
    console.log("Tienes descuento");
} else {
    console.log("No tienes descuento");
}
let verdadero='h'
if (verdadero) {
    console.log('hola a todos');
} else {
    console.log('esto se ejecuta cuando es falso');
}

//! 4. El si...más... Instrucción if
// Puedes encadenar múltiples condiciones con `else if`.
// Ejemplo:
let calificacion = 40;
if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70) {
    console.log("Aprobado");
} else if (calificacion >=50){
    console.log("Aprobado 1");
} else if (calificacion >=40){
    console.log("Reprobado");
} else if (calificacion >=30){
    console.log("Reprobado");
} else if (calificacion >=20){
    console.log("Reprobado");
} else {
    console.log("Muy Reprobado");
}

//! 5. Operador ternario
// El operador ternario es una forma compacta de escribir condiciones.
// Sintaxis: condición ? valor_si_verdadero : valor_si_falso;
// Ejemplo:
let activo = false;
let estado = activo? "Encendido" : "Apagado";
console.log(estado);
// let estado
// if (activo) {
//     estado='Encendido'
// }
// else{
//     estado='Apagado'

// }
// console.log(estado);

//! 6. El interruptor... Enunciado del caso
// El `switch` evalúa una expresión y ejecuta el bloque de código correspondiente al caso coincidente.
// Ejemplo:
// let dia = "Lunes";
let dia = "Viernes";
// let dia = "Sabado";
switch (dia) {
    case "Lunes":
        // for (let i = 1; i <=7; i++) {
        //         console.log(i);
                
        // }
        console.log("Inicio de semana");
        break;
    case "Sabado":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
}

//! 7. Resumen de las estructuras condicionales
// Las estructuras condicionales permiten tomar decisiones en el programa basadas en valores dinámicos.
// if, if...else, else if, y switch son herramientas clave para implementar lógica condicional en JavaScript.

//! 8. Introducción a los bucles
// Los bucles permiten ejecutar un bloque de código varias veces mientras se cumpla una condición.
// Ejemplo básico: bucle `while`
let contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++; //5
}

//! 9. El bucle for
// La instrucción `for` ejecuta un bloque de código un número determinado de veces.
// Ejemplo:
for (let i = 0; i < 5; i++) {             // 
    console.log("Iteración: " + i); // 
}

//! 10. El bucle do...while
// A diferencia del `while`, el `do...while` siempre ejecuta el bloque al menos una vez.
// Ejemplo:
let x = 3;
do {
    console.log("Valor de x: " + x); //3
    x++;
} while (x < 3);

//! 11. for...in
// El bucle `for...in` recorre las propiedades de un objeto.
// Ejemplo:
let persona = { nombre: "Ana", edad: 25 , telefono:23423434};
// console.log(persona['edad']);
// console.log(persona.nombre);
for (let prop in persona) {
    console.log(prop + ": "   + persona[prop]);
}

//! 12. for...of
// El bucle `for...of` recorre los valores de un iterable, como un array.
// Ejemplo:
let frutas = ["Manzana", "Banana", "Cereza"];
// console.log(frutas[2]);
// console.log(frutas[1]);

for (let fruta of frutas) {
    console.log(fruta);
}



//! 13. Break y Continue
// `break` termina el bucle por completo, mientras que `continue` salta a la siguiente iteración.
// Ejemplo:
for (let i = 0; i < 10; i++) {
    if (i === 5) break; // Termina el bucle cuando i es 5
    if (i % 2 === 0) continue; // Salta los números pares
    console.log("Número impar: " + i);
}

//! 14. Iterar arrays en orden inverso
// Puedes usar un bucle `for` para recorrer un array desde el último elemento.
// Ejemplo:
let numeros = [1, 2, 3, 4, 9];
// console.log(numeros.reverse());
// console.log(numeros.length);
// console.log(numeros[numeros.length-1]);
let arr=[]
for (let i = numeros.length - 1; i >= 0; i--) {
    arr.push(numeros[i])
}
console.log(arr);


//! 15. Combinando condicionales y bucles
// Es común usar condicionales dentro de bucles para filtrar valores o realizar acciones específicas.
// Ejemplo:
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " es par");
    } else {
        console.log(i + " es impar");
}
}
i=1 ; 👌;i++=2 // es impar 
i=2 ; 👌;i++=3 // es impar 
i=3 ; 👌;i++=4 // es par 
i=4 ; 👌;i++=5// es impar 
