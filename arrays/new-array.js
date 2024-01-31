var array =  new Array(3);
array[0] ="Santanu",
array[1] ="Sandeep",
array[2] ="Sidhanta"
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

var fruits = new Array("Orange","Apple","Banana","Guava");

var vegetables = new Array("Potato","Tomato","Egg Plant","Drunkstick");

//concat
var mix = fruits.concat(vegetables);
console.log(mix)

var mix2 = vegetables.concat(fruits)
console.log(mix2)

//join
var movies = ["Avatar@","Good will Hunting@","Vanilla Sky@","Rabne Banadi Jodi@"]

var MovieString =  movies.join("@")

console.log(MovieString)
console.log(typeof MovieString)

