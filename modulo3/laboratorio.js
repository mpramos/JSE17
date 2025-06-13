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
// console.log(contacts); /*✔*/
console.log(contacts.length -1);


console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email} `);

// Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.
let nuevoContacto={
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
}
contacts.push(nuevoContacto)

let nameP= prompt('ingrese el nombre del nuevo contacto')
let phoneP= prompt('ingrese el telefono del nuevo contacto')
let emailP= prompt('ingrese el email del nuevo contacto')

contacts.push({ 
    name: nameP,
    phone: phoneP,
    email: emailP
})
console.log(contacts);


console.log(`${contacts[contacts.length-1].name} / ${contacts[contacts.length-1].phone} / ${contacts[contacts.length-1].email} `);