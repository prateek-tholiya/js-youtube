//reduce 

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


// lets write this in arrow function 

// const myTotal = myNums.reduce((acc , curr) => acc+curr , 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price :  2999

    },
    {
        itemName: "py course",
        price :  999

    },
    {
        itemName: "full stack course",
        price :  4999

    },
    {
        itemName: "app dev course",
        price :  7999

    },
]


const total = shoppingCart.reduce((acc , item) => acc + item.price , 0)

console.log(total);