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

// 4. Agregar y eliminar atributos
let elementoAdd= document.getElementById('miId')
console.log(elementoAdd);

elementoAdd.setAttribute('data-info', 'valor')

// Usos practicos de setAtributte
document.getElementById('miEnlace').setAttribute('href', 'https://www.google.com')

// Agregar un atributo alt a un imagen
document.querySelector('img').setAttribute('alt','Descripcion de la imagen 🏃‍♀️');
document.querySelector('img').setAttribute('src','https://rickandmortyapi.com/api/character/avatar/472.jpeg')

// Deshabilitar un botón
// document.querySelector('#miBoton').setAttribute('disabled', 'false')

// Cmbiar el tipo de un input
document.getElementById('miInput').setAttribute('type', 'password')
// Eliminar un atributo con removeAttribute
elementoAdd.removeAttribute('data-info')
//Agregar un elemento al DOM con appenChild

const nuevoElemento= document.createElement('div')
nuevoElemento.textContent=' Hola soy supuestamente un contenido de un archivo HTML'
nuevoElemento.classList.add('contenido','nuevo-contenido')

const padre=document.querySelector('.padre')
padre.appendChild(nuevoElemento)


//Manipulacion del contenido del DOM

//Modificar el texto con textContent
const parrafo= document.getElementById('miId')
parrafo.textContent='Este es un párrafo modificado con textContent'
parrafo.textContent='<p>hola</p>'

//Modificar el HTML con innerHTML
parrafo.innerHTML='<span>Este es un párrafo modificado con innerHTML</span>'

const contenidoDiv= document.querySelector('.contenido-html')
contenidoDiv.innerHTML += '<img src="https://rickandmortyapi.com/api/character/avatar/472.jpeg" alt="Rick and Morty" />'
contenidoDiv.innerHTML += '<h2>bebe Rick</h2>|'

//Esucha eventos en el DOM

//Evento Click

const boton= document.getElementById('miBoton')
boton.addEventListener('click', function() {
    alert('¡Botón clickeado!');
});

// Evento mouseover (cuando el mouse pasa sobre un elemento)
boton.addEventListener('mouseover', function() {
    console.log('El mouse está sobre el botón');
})
//Evento keydown (cuando se presiona una tecla)
// document.addEventListener('keydown', function(event) {
//     console.log(`Tecla presionada: ${event.key}`);
// });
//Eveto keyup (cuando se suelta una tecla)
// document.addEventListener('keyup', function(event) {
//     console.log(`Tecla soltada: ${event.key}`);
// });
//Evento submit (cuando se envía un formulario)
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe realmente
    console.log('Formulario enviado');
});
//Evento change (cuando cambia el valor de un elemento inut, select, text area  etc.    )
const input = document.getElementById('miInput');
input.addEventListener('change', function() {
    console.log('Valor del input cambiado:', input.value);
});
const input2 = document.getElementById('miInput2');
input2.addEventListener('change', function() {
    console.log('Valor del input2 cambiado:', input2.value);
}   );

//Evento focus (cuando un elemento recibe el foco)
input.addEventListener('focus', function() {    
    console.log('Input enfocado');
});
//Evento blur (cuando un elemento pierde el foco)
input.addEventListener('blur', function() {
    console.log('Input desenfocado');
});
//Evento scroll (cuando se desplaza la página)
window.addEventListener('scroll', function() {
    console.log('Página desplazada');
});
//Evento resize (cuando se cambia el tamaño de la ventana)
window.addEventListener('resize', function() {
    console.log('Ventana redimensionada');
});