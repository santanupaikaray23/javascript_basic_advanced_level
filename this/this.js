// console.log(this) // this points to global object

// function a(){
//     console.log(this) // this keyword is still going to point to global object

// }

// a()

// var b = function(){
//     console.log(this) // This is points to global object
// }
// b()

// function sample(){
//     console.log(this)
//     this.newVariable = 'Santanu'
// }
// sample()
// console.log(newVariable)

var person = {
    name: 'Santanu',
    log: function(){         //method on the object
        this.name="kumar"   // this become that object
        console.log(this)
    }
}
console.log(person)
person.log();