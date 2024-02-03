function Shape(){

}

Shape.prototype.draw = function(){
    return "I am generic shape"
}

// Circle
function Circle(){

}

Circle.prototype =  object.create(Shape.prototype)