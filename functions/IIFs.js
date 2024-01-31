// var sample = (function(){
//     console.log('This is a sample function')
// })()
// console.log(sample)

var sample = (function(){
    console.log('This is a sample function')
    return 1;
})()
console.log(sample)

var output = (function(){
    var name = 'Santanu';
    var getName = function(){
        return name;
    }
    return getName()
})()
console.log(output)

var name = "Santanu"
var getName = function(){
    console.log('This is getname function outside IIF'+''+ name)
}
getName()