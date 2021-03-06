/*

 Create a file named http-uppercaserer.js.  
   
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program. 

*/

const map = require('through2-map')  
const http = require('http')

const [a,b,port, ...args]=process.argv;

const server = http.createServer(function (req, res) { 
    
    if (req.method == 'POST') {
        
            req.pipe(map(function(chunk) {
                return chunk.toString().toUpperCase();
              })).pipe(res);
    }
    else{
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    }

})  

server.listen(port);

/* suggested solution

    'use strict'
    const http = require('http')
    const map = require('through2-map')
    
    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/