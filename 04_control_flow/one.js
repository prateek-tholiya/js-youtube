const temperature = 42

// if(temperature < 50 ){
//     console.log("temperature is less then 50 ");
// }
// else{
//     console.log("temperatur is greater than 50 ");
// }
// console.log("executed "); // this line will always be executed as it is outside of if ,else conditions 
// // < ,> ,<= ,>= ,==, != , === (used for knowing datatypes also) , !==

const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// // console.log(`user power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test")      // this is implicit scope it already assume that there is a scope we have to use
// console.log("test 2 ");                   //    semicolon at the end or we can use use coma to contine in second line 
//                                // but we dont write code like this as this is bad practice 

// if(balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true


if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
}

const loggedInGoogle = true
const loggedInGmail = false

if (loggedInGmail || loggedInGoogle){
    console.log("allow loggin ");
}
