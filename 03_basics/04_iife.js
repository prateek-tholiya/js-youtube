// imediately invoked function expression (IIFE)

(function chai(){ // this is named iife
    console.log(`db connected`);
})();               // semi colon ; is used to divide two iife function so that first iife function should know where to end and let 
                    // second iife function to start 

((name) => {                
    console.log(`db connected two ${name}`);
})('hitesh')                    
