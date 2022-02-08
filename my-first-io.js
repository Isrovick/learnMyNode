
const [a,b,file,...args]=process.argv;

const fs = require('fs');
const buf = fs.readFileSync(file);
const str = buf.toString();
console.log((str.match(/\r?\n/g) || []).length);