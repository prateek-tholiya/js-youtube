//let age = 33
//let age = "33"
//let age = "33abc" //
//let age = null
// let age = undefined  
// console.log(typeof age) // console.log(typeof(age))  // or we can write in this way 


// let valueInNumber = Number(age)
// console.log(typeof valueInNumber)  
// console.log(valueInNumber) 

// 33 => it will be easily converted to 33 
// but as soon as we write 33 => "33abc" it will not be converted and will show NaN (not an number )in output
// true => will be conveterted in 1 and false => in 0   
/*
let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)
console.log(isLoggedIn)
*/
// 1=> output is true 0=> output is false 
// "" => output is false 
// "prateek" output is true 
/*
let number = 33

let stringNumber = String(number)
console.log(stringNumber)
console.log(typeof stringNumber) 
*/
// it is converted into string 


////////////////////*********operations  ******************////////////////////
/*
let value = 3 

let negValue = -value
console.log(negValue) // this will give output as -3 
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);  // this is used for 2 power 2 
console.log(2/2)
console.log(4%2)  // modulus operator used for remainder 
*/
// add strings 
/*
let str1 = "prateek"

let str2 = " tholiya"

let str3 = str1 + str2   // only addition works in string np other operator is used 
console.log(str3)
*/

//add string with number 
// some easy tricy things in javascript 
// console.log("1" +2)  // output  => 12
// console.log(1 + "2"); // output => 12
// console.log(2 + "1"); // output => 21
// console.log("3" + 2 +2 ); // output => 322  if string is first in this type of operation than answer will be in string  
// console.log(2 +2 + "1"); // output => 41     if string is in last than first operation will happen and then 
//                           //string will be added to it as a string // wrting such code is a bad practice // code should be clean and readable 



let count = 100 
//count++  // post incremet 
++count   // pre increment 
console.log(count)
