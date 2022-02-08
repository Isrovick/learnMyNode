const [a,b,URL, ...args]=process.argv;
const http = require('http');

const callback = response => {
    response.setEncoding("utf8");
    response.on('data',(data)=>{
        console.log(data);
    });
}
http.get(URL, callback);

