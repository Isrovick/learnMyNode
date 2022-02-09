const net = require('net')  
const http = require('http')
const fs = require('fs');
const path = require('path'); 

const [a,b,port,filename, ...args]=process.argv;

 
const server = http.createServer(function (req, res) { 
  // request handling logic...  
  var readStream = fs.createReadStream(filename);
  readStream.on('open', function () {
  readStream.pipe(res);
  });
})  
server.listen(port)  
