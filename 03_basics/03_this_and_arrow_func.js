const user = {
    // userName: "prateek",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.userName} , welcome to website`);
        // console.log(this);  // here it will give all variables of object 
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this);  // this will give empty object outside object or function 


// function chai(){
//     let userName = "prateek"
//     console.log(this.userName);
// }

// chai()

// const chai = function () {
//     let userName = "prateek"
//     console.log(this.userName);
// }


// const  chai = () => {
//     let userName = "prateek"
//     console.log(this.userName)
// }

// chai()

// ()  => {}  // this is arrow function 

// you  can hold arrow function in name also 


// const addTwo = (num1 , num2 )  => { // if you use curly braces{} than you have to use return 

//     return num1 + num2       // this is know as explcit return which have return in it 
// }
// console.log(addTwo(3,4));

// const addTwo = (num1 , num2) => num1 + num2  

const addTwo = (num1 , num2) => (num1 + num2) // this in known as impicit return which does not involve return 
                                              // if you dont  paranthesis () than no need to use return

console.log(addTwo(3,4));