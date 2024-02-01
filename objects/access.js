// var person = {
//     firstName: 'Santanu',
//     lastName: 'Paikaray',
//     city: 'Bhubaneswar'
// }
// console.log(person)

// person.age =38;
// console.log(person)

// person.middleName =38;
// console.log(person)

// //Object.preventExtensions()
// // we can edit and delete the properties
// // but can't add new properties
// Object.preventExtensions()
// ------------------------------------
// we can edit and delete the properties
// but can't add new properties
var preventObject= {
    name:'Santanu',
    city: 'Bosten',
    age:40
}
Object.preventExtensions(preventObject);

preventObject.email="santanupaikaray1996@gmail.com"
preventObject.name="Uma"
delete preventObject.age;

console.log(preventObject)

// Object.seal()
// --------------------
// We can edit the properties but we can't add
// new propertiesor can't delete existing properties
var sealObject = {
    name :'Santanu',
    city : 'Bhubaneswar',
    age : 40
}
Object.seal(sealObject);
sealObject.email="santanupaikaray1996@gmail.com"
sealObject.name="Sidhanta"
delete sealObject.age;

console.log(sealObject);

// Object.freeze()
// ----------------------
// we can't add and delete the properties
var freezeObject={
    name:'Santanu',
    city:'Bhubaneswar',
    age:40,
    address:{
        State:'NA'
    }
}
Object.freeze(freezeObject);

freezeObject.email="santanu@gmail.com"
freezeObject.name="Lucky"
delete freezeObject.age;

Object.freeze(freezeObject.address)
freezeObject.address.State = 'LA'

console.log(freezeObject);