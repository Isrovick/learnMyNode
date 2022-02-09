const map = require('through2-map')  
const http = require('http')

const [a,b,port, ...args]=process.argv;

const server = http.createServer(function (req, res) { 
    
    if (req.method == 'POST') {
        
            req.pipe(map(function(chunk) {
                return chunk.toString().toUpperCase();
              })).pipe(res);
    }

})  
server.listen(port)  