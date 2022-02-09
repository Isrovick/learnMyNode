var strftime = require('strftime')
const net = require('net')  

const [a,b,port, ...args]=process.argv;


     const server = net.createServer(function (socket) {  
        socket.end(strftime('%F %H:%M')+"\n")
     }) 

server.listen(port)

/*
SUGGESTED SOLUTION


    'use strict'
    const net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))


*/