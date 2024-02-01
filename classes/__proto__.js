function Student(){
    this.name = 'join'
    this.gender = 'M'
}
var stuObj = new Student();

console.log(Student.prototype)
console.log(stuObj.prototype)
console.log(stuObj.__proto__)