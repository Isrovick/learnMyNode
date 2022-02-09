/**
 * 
 *  Create a file named http-file-server.js.  
   
  Write an HTTP server that serves the same text file for each request it  
  receives.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
  You will be provided with the location of the file to serve as the second  
  command-line argument. You must use the fs.createReadStream() method to  
  stream the file contents to the response.  
 */

const net = require('net')  
const http = require('http')
const fs = require('fs');
const path = require('path'); 

const [a,b,port,filename, ...args]=process.argv;

 
const server = http.createServer(function (req, res) { 
  var readStream = fs.createReadStream(filename);
  readStream.on('open', function () {
        readStream.pipe(res);
  });
})  
server.listen(port)  
















/*
SUGGESTED SOLUTION

    'use strict'
    const http = require('http')
    const fs = require('fs')
    
    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))


*/
