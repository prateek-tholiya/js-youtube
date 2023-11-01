// const userEmail = "prateek.mail"

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("dont have user email");
// }

// falsy values - means values which are assumed false 

// false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan
// values other than these are truthy values

// truthy values 

// some truthy values are - "0" , "false" , " " , [] , {} , function(){} 


//how to check if array is empty

// const userMail = []
// if (userMail.length === 0) {
//     console.log("array is empty");
// }

// how to detect if object is empty or not 

const emptyObj = {}

// if (Object.keys(emptyObj).length===0) {
//     console.log("object is empty");
// }

// nullish coalescing operator(??) :null undefined  - it is only used for null and undefined 

let val1;

// val1 = 5??10
// val1 = null ?? 10
val1 = undefined ?? 15


// console.log(val1);


// ternary operator - it is different from nullish coalescing operator

// condition ? true : false

const iceTea = 100

iceTea <= 80 ?  console.log("less than 80")  : console.log("more than 80")  