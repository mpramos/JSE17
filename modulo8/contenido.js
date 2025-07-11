// Funciones de arreglos
// Programacion funcional -> funciones puras

const inventario=[{
    id: 1,
    nombre:'Laptop',
    categoria:'Electronicos',
    precio: 3000,
    stock: 10,
    fechaIngreso: '2025-01-15',
    },
    {
    id: 2,  
    nombre:'Celular',
    categoria:'Electronicos',
    precio: 800,
    stock: 25,
    fechaIngreso: '2025-02-20',
    },
    {
    id: 3,
    nombre:'Televisor',
    categoria:'Electronicos',
    precio: 1500,
    stock: 5,
    fechaIngreso: '2025-03-10',
    },
    {   
    id: 4,  
    nombre:'Tablet',
    categoria:'Electronicos',
    precio: 600,
    stock: 20,
    fechaIngreso: '2025-04-05',
    },
    {   
    id: 5,
    nombre:'Audifonos',
    categoria:'Electronicos',
    precio: 100,
    stock: 50,
    fechaIngreso: '2025-05-01',
    },
    {
    id: 6,
    nombre:'Reloj Inteligente',
    categoria:'Electronicos',   
    precio: 200,
    stock: 15,
    fechaIngreso: '2025-06-15',
    },
    {
    id: 7,
    nombre:'Collar',
    categoria:'Joyería',
    precio: 250,
    stock: 8,
    fechaIngreso: '2025-07-20',
    },
    {
    id: 8,
    nombre:'Anillo',
    categoria:'Joyería',
    precio: 150,
    stock: 12,
    fechaIngreso: '2025-08-10',
    }
]
   //! 📌 forEach
   // ? Itera un elemento de arreglo. Usamos forEach solo con arreglos. Toma una función de devolución
   // ? de llamada con elementos, parámetro de índice y arreglo en sí. El índice y el arreglo son opcionales.
   // *🟢 Mostrar todos los nombres de productos
//    inventario.forEach((producto, index)=>{console.log({nombre:producto.nombre,precio:producto.precio,indice: index})});  //! 📌 map
   //! 📌 map
// ?  Itera los elementos de un arreglo y los modifica. Toma una función de devolución de llamada con elementos, 
// ?  índice, parámetro de arreglo y devuelve un nuevo arreglo.
  // *🔵 Crear un array con nombres en mayúsculas
//   const nombresMayusculas= inventario.map((producto)=>{return producto.nombre.toUpperCase()})
//     // *🔵 Crear un array con precios de producto
//     const preciosProductos= inventario.map(producto=>{return producto.precio*0.3})
//     console.log('Nombres en mayúsculas:');
//     console.log(nombresMayusculas);
//     console.log('Precios de productos ');
//   console.log(preciosProductos);
//   console.log('inventario original:');
//   console.log(inventario);
    //! 📌 filter
// ? Filtra los elementos de un arreglo según una condición. Toma una función de devolución de llamada con elementos,
// ? índice, parámetro de arreglo y devuelve un nuevo arreglo con los elementos que cumplen la condición.
// *🟢 Filtrar productos de categoria "Electronica"
// const electronicos= inventario.filter((producto)=>{return producto.categoria==='Electronicos'})
// console.log('Productos de categoria Electronicos:', electronicos);
// *🟢 Filtrar productos con stock mayor a 10
// const stockMayor10= inventario.filter((producto)=>{return producto.stock>10})
// console.log('Productos con stock mayor a 10:', stockMayor10);
  //! 📌 reduce
   //?Reduce toma una función de devolución de llamada. La función de devolución de llamada toma el acumulador,
  //?la corriente y el valor inicial opcional como parámetro y devuelve un solo valor. Es una buena práctica
  //?definir un valor inicial para el valor del acumulador. Si no especificamos este parámetro, por defecto el acumulador obtendrá la matriz.
  //?Si nuestra matriz es una matriz vacía, entonces arrojará un error
    // *🟡 Calcular precio total del inventario

    // let acumulador=0
    // for (let indice = 0; indice < inventario.length; indice++) {
    //     const producto = inventario[indice];
    //     acumulador = acumulador + producto.precio; //       0+ 3000 => 3000 + 800=> 3800
    // }
    // console.log('Precio total del inventario:', acumulador);

     let totalPrecio= inventario.reduce((acumulador, producto)=>{return acumulador+producto.precio}, 0)
    console.log('Precio total del inventario con reduce:', totalPrecio);
    
  //! 📌 find
  //?  Devuelve el primer elemento que cumple la condición
  // *🟠 Buscar un producto específico 'Televisor'
  let productoTelevisoR= inventario.find((producto)=>{return producto.nombre==='Televisor'})
  console.log('Producto Televisor encontrado:', productoTelevisoR);
  // *🟠 Buscar un producto específico 'Teclado'
  let productoTeclado= inventario.find((producto=>{return producto.nombre==='Teclado'}))
console.log('Producto Teclado encontrado:', productoTeclado); // undefined, no existe el producto
 //! 📌 some
      //?  Comprueba si algunos de los elementos son similares en un aspecto. Devuelve un valor booleano

//*🟣 Comprobar si algun producto tiene stcok bajo (menor a 15 )
 let hayStockBajo= inventario.some((producto)=>{return producto.stock<15})
console.log('¿Hay algún producto con stock bajo?', hayStockBajo); 

  //! 📌 sort
//? Ordena los elementos de un arreglo según una condición. Toma una función de comparación que recibe dos elementos y devuelve un valor numérico.
// *🟤 Ordenar productos por precio de menor a mayor
let productosOrdenados= inventario.sort((a,b)=>{return a.precio - b.precio})
console.log('Productos ordenados por precio de menor a mayor:'  , productosOrdenados);
 //! 📌 every
//? Comprueba si todos los elementos cumplen una condición. Devuelve un valor booleano.

//*🟤 Verificar si todos los productos son de la categoría "Electrónicos"
 let todosElectronicos=inventario.every((producto)=>{return producto.categoria==='Electronicos'})
 console.log('¿Todos los productos son de la categoría "Electrónicos"?', todosElectronicos);
 