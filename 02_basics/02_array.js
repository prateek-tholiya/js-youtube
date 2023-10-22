const marvel_heros = ["thor" , "ironman" , "spiderman"]

const dc_heros  = ["batman" , "superman" , "flash" ]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // this  doesnt give perfect answer what we want this makes second array as a element in an output inside
//                           // first array 
// // now to access that array element we write this syntax
// console.log(marvel_heros[3][1]); 
// but we dont use push because it doesnt give the perfect answer so we use diff method 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// but still we consider much better way to combine array as in this we can add only one array in an array 


// spread method 
const all_new_heros  = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // this is much better way to use and it is called spread method 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // this is array inside array but we have to concat array in one array 

const real_another_array = another_array.flat(Infinity) // this will convert it into a single array 
console.log(real_another_array);

console.log(Array.isArray("prateek")); // this will tell if it is array or not 
console.log(Array.from("prateek"));    // this will convert this string into array 
console.log(Array.from({name : "prateek"})); // intresting as it will give output as empty array as it doesnot know what it need to 
                                               // convert into array. confused b/w string or key

let score1 = 100 
let score2 = 200 
let score3 = 300

console.log(Array.of(score1 , score2 , score3));  // this also combines different arrays in one 

