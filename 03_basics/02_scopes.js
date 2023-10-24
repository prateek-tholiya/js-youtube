var c = 300
let  a = 100

if(true) {
    let a = 10
    const b =20
    var c = 30 
    // console.log("inside scope: " , a);
}

// console.log(a);
// // console.log(b);
// console.log(c);

function one() {
    const name = "prateek"

    function two() {
        const email = "prateek@gmail.com"
        console.log(name);
    }
    two()
}
// one()

if (true) {

    const myName =  "tholiya"

    if(myName === "tholiya"){

        const website = "youtube"
        // console.log(myName + website);
    }
    // console.log(website);
}
// console.log(myName);



/*************************************intresting**********************************************/

function addOne(num){
    return num + 1
}
console.log(addOne(5));


const addTwo = function(num){
    return num + 2 
}
console.log(addTwo(5));
