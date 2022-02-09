const [a,b, ...URLs] = process.argv;
const http = require('http');
const bl = require('bl')

let promises = URLs.map((url,index)=>{

        return new Promise( resolve => { 
            http.get( url, 
                      response => {
                                    response.setEncoding("utf8");
                                    response.pipe(bl((err, data) =>{ 
                                                                    const text = data.toString();
                                                                    resolve({text,index});
                                                                     }));

                                   })
                    });
});

Promise.all(promises).then(results=>{

    results.sort((a,b)=>{
        return a.index - b.index;
    })

    results.forEach((res)=>{
        console.log(res.text);
    })
});












/* OFFICIAL SOLUTION

'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
*/