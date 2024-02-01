function Student(){
    this.name = "Santanu"
    this.gender = "Male"
    this.age = 25;
    this.getStudent = function(){
        return this.name + 'is a' + this.gender
    }
}
var stuObj1 = new Student();
stuObj1.age = 25;

console.log(stuObj1.age)

var stuObj2 = new Student();
console.log(stuObj2.gender)

console.log(stuObj1.getStudent())
console.log(stuObj2.getStudent())