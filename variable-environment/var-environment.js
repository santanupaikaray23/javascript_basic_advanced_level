// function b(){
//     var x;
// }
// function a(){
//     var x=2
//     b();
// }

// var x =1;
// a();
// console.log(x)

// function a(){
//     var x=1;
// }
// console.log(x)

// function a(){
//     var aPrivateVariable = 1;
// }
// a();
// var aPrivateVariable =12
// function a(){
//     var aPrivateVariable=2
// }
// a()
// console.log(aPrivateVariable)
function b(){
    var x;
}
function a(){
    x=2;
    b()
}
a();
//  var x =1;
 console.log(x)