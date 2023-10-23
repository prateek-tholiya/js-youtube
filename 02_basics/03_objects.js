// single ton  - when you declare object as literal than no singleton is formed 
// but if you make it from a constructor  it will be alaways be a singleton 

// object.create //  this is constructor method to create object 


// object leterals 

const mySys = Symbol("key1")

const jsUser = {

    name: "prateek",
    age: 23 ,
    location: "jaipur",
    "full name": "prateek tholiya",
    [mySys]: "key1",       // we use bracket over here as as this is the syntax to print symbol other wise it will print it as a string 
    email: "prateek@gmail.com",
    isLoggedIn: false,
    lastLoginInDays:["monday" , "saturaday"]
}
// console.log(jsUser.location);                 
// // console.log(jsUser.lastLoginInDays[1]);   // we dont use this method as we beetter methods 

// console.log(jsUser["name"]); 
// // console.log(jsUser.full name );  // we use this method beacuse using dot it does not accept something like "full name ":"prateek tholiya"
// console.log(jsUser["full name"]);  // so we use [] this method 

// console.log(jsUser[mySys]); 

jsUser.email = "prateek@chatgpt.com"          // this is how you can change the value of any key in object 
// console.log(jsUser["email"]);
 // now if you want to lock the value in object you use this 
// Object.freeze(jsUser)
jsUser.email = "prateek@microsoft.com"  // this wont be applied as we used freeze on onject jsUser 
// console.log(jsUser);   // this will print whole object 

// now we will talk about function 
jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this is (` `${}) known as string interpolation and through 'this' we get to know
}                                              // about every key in object
 

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());











