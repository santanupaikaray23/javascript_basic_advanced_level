function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.getFullName = function(){
    return this.firstName+ ' ' + this.lastName
}

function Student(age){
    this.age = age
}

Student.prototype.getAge = function(){
    return this.age

}

// Inheretance using prototype
// Here we inherit properties from parent

// Student.prototype = new Person("Santanu","Paikaray");

// Student.prototype.getAge = function(){
//     return this.age

// }

var Student = new Student(37);

console.log(student.firstName);
console.log(student.lastName);
console.log(student.age);
// console.log(student.getFullName());
console.log(Student)