const [a,b,file,...args]=process.argv;

const fs = require('fs');
const buf = fs.readFile(file, 'utf8',(err,data)=>{
    console.log((data.match(/\r?\n/g) || []).length);
});