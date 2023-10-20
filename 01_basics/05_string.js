// const name = "prateek"

// let repoNumber = 40  
// console.log(name + repoNumber); // this is old way to print so we dont use this method in modern era 

// console.log(`hello my name is ${name} and my repo number is ${repoNumber}`);    // plz follow this syntax 
// so in this dollar curly bracket sign ${} we can insert our variable which we want to concataned string in output  


const gameName = new String('hitesh-hc-com') 
 
console.log(gameName[4])  // this show what letter at this index is in strings

console.log(gameName.length); // this gives length of string 
console.log(gameName.toUpperCase()); //this will give string in uppercase in output 
console.log(gameName.charAt(3)); // this will character at index mentioned in brackets  (3) 
console.log(gameName.indexOf('t'));  // this will give index of character mentioned ('t')


const newString = gameName.substring(0 , 4) // this will give output till index 3 means one lesss then than what we have written(0,4)
console.log(newString);

const anotherString = gameName.slice(0 , 4) // this gives output from  start to  end what we have written in ( start, end )// we can enter negatie number also in this string 
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); // this trim will remove whitespaces from both sides and print 'hitesh' directly 

const url = "https://prateek.com/prateek%20choudhary"
// so if u want to remove %20 between yout name in url you will use replace 

console.log(url.replace('%20' , '-')) // this will replace %20 with - 

console.log(url.includes('choudhary')); // this will tell if something is present there or not 

console.log(gameName.split('-')); // this will convert a string separated by a '-' , or by any space or any thing 
                                  // const gameName = new String('hitesh-hc-com') like this than this split(seprator) will remove 
                                  // these seprator and convert string into an array like this [ 'hitesh', 'hc', 'com' ]  
 