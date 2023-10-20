// primitive type 
  // call by value 

//  7 types - string , Number , Boolean, undefined , null ,  BigInt , symbol

const number = 3424234    // number 
 
const decimalNumber = 100.45 // number 
const nameString = "prateek" // string 

const isBool = true   // boolean 
let thisNumber = null  // null 

let city ;  // undefined 

// reference type ( non-primitive type )

// types - array , objects , function 

// arrray 
const heroes = ["shaktiman" , "nagraj" , "doga"]

//objects - are written in curly braces {}

// let myObj = {
//     name:"prateek"
//     age: 23
// }

// //function - function is written like this 

// function(){
//     //console.log("hello world ")
// }


/****************************************************************************************************/

// memory types 

// stack (primitive type) and heap (non primitive type)
// stack 
let myYoutube = "prateekYoutube"

let changeYoutube = myYoutube
changeYoutube = "tholiyaYoutube"

console.log(myYoutube);
console.log(changeYoutube);


// heap

let userOne = { // object 
  email : "prateek@gmail.com" ,
  upi : "prateek@ybl"
}

userTwo = userOne

userTwo.email = "tholiya@gmail"

console.log(userOne.email);
console.log(userTwo.email);