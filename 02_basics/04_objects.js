// const tinderUser = new Object() // this is singleton object // and this is will give empty object in output
const tinderUser = {}   // this is non singleton object   // this and above line are same and will give same output  i.e empty output {}

tinderUser.id = "123abc"
tinderUser.name = "prateek"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser =  {

    email: "prateek@gmail.com",
    fullname: {
        userfullname: {
            firstName: "prateek",
            lastNme:  "tholiya"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstName);


// now we will talk about combining one object in another 

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = {5:"e" , 6:"f"}

// const obj4  = Object.assign({} , obj1 , obj2 , obj3)  // but we are not going to use this 

const obj4 = {...obj1, ...obj2, ...obj3} //we will use spread method 
// console.log(obj4);
 
const user = [                          // this is known as array of objects 

    {
        id:1,
        email:"prateek@gmail.com"
    },
    {
        id:1,
        email:"prateek@gmail.com"
    },
    {
        id:1,
        email:"prateek@gmail.com"
    },
]
user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

//destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// json api in object form
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// json api in array form 
[
    {},
    {},
    {}
]