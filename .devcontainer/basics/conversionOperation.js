let score = "33abc"

console.log(typeof score)

let scoreinNumber = Number(score)
//let scoreinString = String(score)
//let scoreinBoolean = Boolean(score)

console.log(typeof scoreinNumber);
console.log(scoreinNumber);

//33 => 33
//"33abc" => NaN => Not a Number
//Null => 0
//Undefined => NaN
//True/False => 1/0

//*******SOme special conversion of string */

// console.log(1+"2"); => 12
// console.log("1" + 2); => 12
// console.log("1" + "2"); => 12
// console.log("1" + 2 + 2); => 122
// console.log(1 + 2 +"2"); => 32