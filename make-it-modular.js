const mymodule = require('./mymodule.js') 
const path = require('path');
const [a,b,dir,ext, ...args]=process.argv;

const callback = (err, fileList) => {

    if (err) throw err;

    fileList.forEach(file => {
       console.log(file);
    });
}

mymodule(dir,ext,callback);
