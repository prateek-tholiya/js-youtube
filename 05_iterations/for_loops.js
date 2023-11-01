// for loop 
//syntax for loop 
// for(let index = 0; index < array.length ; index++){
//     const element = array[index];
// }


// for(let i = 0; i < 10 ; i++){
//     const element = i;
//     if(element == 5){                  // if else inside loop 
//         console.log("5 is the best number ");
//     }
//     console.log(element);
// }


// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner loop value:${j} and outer loop value: ${i}`);

//     }
    
// }

// let myArray = ["flash" , "batman" , "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// break and continue 

// break  

// for (let index = 0; index <= 20; index++) {
//     if( index == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }

//continue 

for (let index = 0; index <= 20; index++) {
    if( index == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}
