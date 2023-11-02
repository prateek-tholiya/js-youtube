// const coding = ["js" , "ruby" , "java" , 'python' , "cpp"]

// coding.forEach((item) => {
//     console.log(item);
// });


// filter operation - filter also takes call inside it 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num > 4)
 // now if i write this in scope 
// const newNums = myNums.filter((num) => {
//      return num > 4   // we always have to return this in scope 
// })


// now use for each instead of filter 

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);



// now how to use filter operation efficiently  

// we have a data of lots of books and have details about book such as genre , publish year , latest edition , etc 

// now how to filter a book according to its given details 

// like i want to filter a book on genre basis 

let userBooks = books.filter((bk) => bk.genre === 'history') // without using scope 

userBooks =books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre=== 'history'
})
console.log(userBooks);