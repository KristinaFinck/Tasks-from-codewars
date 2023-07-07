function animals(obj){
 
  var result = 'this ' + animal.color + ' ' + animal.name + ' has ' + animal.legs + ' legs.';
  return result;
}
var animal = {
    name: "dog",
    legs: 4, 
    color: "white"
  };
 console.log(animals());
