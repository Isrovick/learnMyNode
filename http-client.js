/**
 * 
 *   Create a file named http-client.js.  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).  
   
 *  */

const [a,b,URL, ...args]=process.argv;
const http = require('http');

const callback = response => {
    response.setEncoding("utf8");
    response.on('data',(data)=>{
        console.log(data);
    });
}
http.get(URL, callback);

