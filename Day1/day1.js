// console.log("hello");
// let word ="BSAIKUMAR";
// const split = word.split("")
// console.log(split)
// Most programmers will tell you that one of the ways to improve your
//  performance 
// in competitive programming is to practice a lot of problems. 
// Sam took the above advice very seriously and decided to set a target
//  for himself. He decides to solve at least 10 problems every week for
//   4 weeks.
//    Given the number of problems he actually solved in each week over 4 weeks as P_1, P_2, P_3,P_4 output the number of weeks in which Sam met his target. Input Format: 
//    There is a single line of input, with 4 integers P_1, P_2, P_3,P_4. These are the number of problems solved by Sam in each of the 4 weeks. Output Format: Output a single integer in a single line - the number of weeks in which Sam solved at least 10 problems. 
// Sample 1: Input 12 15 8 10
// function count(arr){
//     const reachedtarget = arr.filter(num=> num>=10)
//     return reachedtarget.length;
// }

// var arr=[12,15,8,10];

// console.log(count(arr));

// var arr=[9, 3, 8 ,8 ,4];
// var arr=[2 ,13 ,4 ,16];
var arr =[1 ,2 ,3 ,4]

// var k = 8;
var k =6;
// var count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>k){
//         count+=1;
//     }
// }
function count(arr,k){
    const c=arr.filter(num=>num>k)
    return c.length;
}
console.log(count(arr,k));