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
