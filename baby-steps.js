
/*
  
  Create a file named baby-steps.js.  
   
  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout).  
   
*/

const [a,b,...args]=process.argv;
let result = 0;
args.forEach(arg => {
    result+=parseInt(arg);
});
console.log(result);