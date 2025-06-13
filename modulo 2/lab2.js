// 
let name1='Maxwell'  
let phone1='(0191) 719 6495'
let email1='Curabitur.egestas.nunc@nonummyac.co.uk'

let name2='Raja Villarreal'  
let phone2='0866 398 2895'
let email2='posuere.vulputate@sed.com'

let name3='Helen Richards'  
let phone3='0800 1111'
let email3='libero@convallis.edu'


console.log(`${name1}/ ${phone1} / ${email1} `);
console.log(`${name3}/ ${phone3} / ${email3} `); /*✔*/

let fruta='hola' 
console.log(fruta[0])
console.log(fruta)
fruta='adios'
console.log(fruta[1])
fruta[1]='a'
console.log(fruta)


let frutas=['🍊','🍏','🍇',1,true,null]
console.log(frutas[0])
frutas[0]='🍉'
console.log(frutas)
console.log(frutas.length)

let usuarios=[{nombre:'juana',edad:'56'}, {nombre:'cesar',edad:'45'},1,'hola']
console.log(usuarios)
console.log(usuarios.length)

let contactos=[ ['Maxwell','(0191) 719 6495','Curabitur.egestas.nunc@nonummyac.co.uk'],
['Raja Villarreal']]
console.log(`${contactos[0][0]} / ${contactos[0][1]} / ${contactos[0][2]} `) //1

let contacts=[
        {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
        }, 
        {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
        },
         {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
        },

]

//Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca
console.log(`${contacts[0].name} / ${contacts[0].phone} /${contacts[0].email}`) //2
const newContact={
        name:'Maisie Haley',
        phone:'0913 531 3030',
        email:'risus.Quisque@urna.ca'
}
contacts.push(newContact)
const ultimoIndice=contacts.length-1
console.log(ultimoIndice)
console.log(`${contacts[ultimoIndice].name} / ${contacts[ultimoIndice].phone} / ${contacts[ultimoIndice].email}}`)


