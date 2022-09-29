//arrow functions
var isEven = (num => num%2==0)
// console.log(isEven(2));
//call back functions
// conventionalwayisfasterthanmodernway
// console.time();
// var result = [81,2,2,4,6].every((num => num%2==0));
// console.timeEnd();
// console.log(result);


// var isOdd =(num => num%2!==0)
// var resultodd = [11,3,7,9,5].every((num => num%2!==0));
// console.time();
// console.log([11,3,7,9,5].every((num => num%2!==0)));
// console.timeEnd();


//foreach loop
var elements =['A','B','C','D','E'];
// elements.forEach((s) => console.log(s));
console.log(elements.slice(1,3));
console.log(elements.splice(2,1));