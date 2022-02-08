const [a,b,dir,ext, ...args]=process.argv;

const fs = require('fs');
const path = require('path');
fs.readdir(dir, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
        if(path.extname(file) === '.'+ext) console.log(file);
    });
});