const [a,b,URL, ...args]=process.argv;
const http = require('http');
const bl = require('bl')

const callback = response => {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) { 
        const result=data.toString();
        console.log(result.length);
        console.log(result);
     }))  
}
http.get(URL, callback);

