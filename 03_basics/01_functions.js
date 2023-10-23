// function sayMyName() {
//     console.log("p");
//     console.log("r");
//     console.log("a");
//     console.log("t");
//     console.log("e");
//     console.log("e");
//     console.log("k");
// }

// sayMyName()

// function addNumber(number1 , number2){
//     console.log(number1 + number2);
// }

function addNumber(number1 , number2){
    // let result = number1 + number2   // here we will not use console.log() instead we will use return 
    // return result
    // or you can directly return 
    return number1 + number2
}

const result = addNumber(4, 9)
// console.log(result);
// addNumber(4 , 5)

function loginUserMessage(username){
    return `${username} just logged in `
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());


function calculateCartValue(...num1){    // these 3 dots are are rest operator and will give me output int array of all the values in it 
    return num1
}
// console.log(calculateCartValue(200 , 500 , 700 )); 

const user = {
    username: "prateek",
    price: 199 

}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));