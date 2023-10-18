const accountId = 13455
let accountEmail = "prateek@gmail.com"
var accountPassword = "12344"
/*
prefer not to use 
beacuse of issue of block scope {}  and functional scope 
*/
accountCity = "jaipur" // in javascipt variable can be declared like this but it is not a good practice

let accountState ;  // in javascript semicolon ; doesnt matter use it or not 

// accountId = 2   // not allowed 

accountEmail = "tholiya@gmail.com"
accountPassword = "34324"
accountCity = "jodhpur"
/*
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
*/
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

