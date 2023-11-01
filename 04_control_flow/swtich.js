// swtich case syntax 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;    
//     case 3: 
//         console.log("march");
//         break;
//     case 4: 
//         console.log("april");
//         break;      
//         // break is used to not print further condition if condition is matched if we remove break it will print all conditions 
//         // but it will not print default 

//     default:
//         console.log("default case match");
//         break;
// }
const month = "april"  // it also works in string 

switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;    
    case "march": 
        console.log("march");
        break;
    case "april": 
        console.log("april");
        break;      
        // break is used to not print further condition if condition is matched if we remove break it will print all conditions 
        // but it will not print default 

    default:
        console.log("default case match");
        break;
}