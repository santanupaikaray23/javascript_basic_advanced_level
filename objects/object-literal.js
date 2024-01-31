// Object Literal

var person  = {};
console.log(person)

//Primitive types inside an object are called properties
//Function is inside an object then that is called method

var person = {
    id : 1,
    firstname : 'Santanu',
    lastname : 'Paikaray',
    count:100,
    isAdmin: true,
    address:{},
    array:['red','blue','yellow'],
    getDetails:function(){
        return this.firstname

    }
}
console.log(person.id)
console.log(person.firstname)
console.log(person.lastname)
console.log(person.count)
console.log(person.address)
console.log(person.isAdmin)
console.log(person.array)