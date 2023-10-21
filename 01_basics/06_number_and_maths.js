// number 

const score = 400 

// console.log(score) // output =>400
// this will automatically detect type of datatype 
const balance = new Number(100)  //but still if you want confirmly number than you can write like this 
// console.log(balance) // output => [number: 100]

// console.log(balance.toString().length)// number to string and get the length of the string
///output => 3 

// console.log(balance.toFixed(2)); // to give exact value after decimal 
//output => 100.00


//to know precision value (exact value ) of a number 
const otherNumber1 = 123.8966
const otherNumber2 = 23.8966
const otherNumber3 = 123.8966

// console.log(otherNumber1.toPrecision(3));
// console.log(otherNumber2.toPrecision(3));
// console.log(otherNumber3.toPrecision(4));
//output 124
//       23.9
//       123.9
// precision give anwser in string


// we use toLocaleString if we have more zeros in a number so we use this to make it east to understand 

const hundreds =1000000
// console.log(hundreds.toLocaleString);
//output => 1,000,000 // but this is according to american standards 
//so we use indian standard 
// console.log(hundreds.toLocaleString('en-IN'));


// Properties direct attached to number 

// Number.MIN_VALUE // used for min value to be used 
// Number.MAX_VALUE // used for max value to be used 
// Number.MAX_SAFE_INTEGER


//************************************maths **********************************************************/

