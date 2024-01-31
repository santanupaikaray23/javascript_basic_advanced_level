//Array Literal Syntax

var students = [];
console.log(students)

var students = ["Santanu","Sandeep","Sipun","Madhuri"]
console.log(students)

var arrayList = [1,2,3,"Santanu","Paikaray",true]
arrayList[6]="Lucky"
console.log(arrayList)

//push - Will add the elements at the end of the array
var technologies = ["Angular","Node"]
technologies.push("MongoDB")
technologies.push("Express")
//unshift - will add the elements at the begining of the array
technologies.unshift("javaScript");
technologies.unshift("css3");
technologies.unshift("HTML");
//POP- will remove the element at the end of the array
technologies.pop()
technologies.shift()
delete technologies[2]
console.log(technologies)
// shift - will remove element at the begining
// technologies.shift()
delete technologies[7]
console.log(technologies)
