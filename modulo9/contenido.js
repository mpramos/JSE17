// 1. ¿Qué es el DOM?
// El DOM (Document Object Model) 
// es una representación del documento HTML que permite su manipulación.
// 2. ¿Cómo se accede al DOM en JavaScript?
// Se accede al DOM utilizando el objeto `document` en JavaScript.  
// 3. ¿Qué es un evento en JavaScript?
// Un evento es una acción o suceso que ocurre en el navegador, 
// como un clic del usuario, un cambio en un campo de formulario o la carga de una página.
//  Los eventos pueden ser capturados y manejados mediante funciones de devolución de llamada (callbacks)
//  en JavaScript.    
// 4. ¿Cómo se agrega un evento a un elemento del DOM?
// Se agrega un evento a un elemento del DOM utilizando el método `addEventListener` del elemento. Este método toma dos argumentos: el tipo de evento (como 'click', 'mouseover', etc.) y una función que se ejecutará cuando ocurra el evento. Por ejemplo:


// Obtener un elemento por Id
console.log('Elemento por ID:');
const elemento= document.getElementById('miId')
console.log(elemento);

//Obtener elementos por nombre de etiqueta
console.log('Elementos por etiqueta:');
const elementosporTag= document.getElementsByTagName('p')
for (const elemento of elementosporTag) {
    console.log(elemento);
}
// Obtener elementos por clase
console.log('Elementos por clase:');
let elementosPorClase= document.getElementsByClassName('miClase')
for (const elemento of elementosPorClase) {
    console.log(elemento);
}
// 3. Usar querySelector y querySelectorAll
console.log('Elemento por selector:');
let elementoPorSelector= document.querySelectorAll('.miClase')
for (const element of elementoPorSelector) {
    console.log(element);
}
console.log('Elemento por selector nombre de etiqueta:');
let elementoPorSelectorTag= document.querySelectorAll('p')
for (const element of elementoPorSelectorTag) {
    console.log(element);
}

console.log('Elemento por selector ID:');
let idP= document.querySelector('#miId')
console.log(idP);
