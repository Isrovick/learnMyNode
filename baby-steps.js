
const [a,b,...args]=process.argv;
let result = 0;
args.forEach(arg => {
    result+=parseInt(arg);
});
console.log(result);