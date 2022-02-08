const fs = require('fs');
const path = require('path');

module.exports = (dir,ext, callback) => {
    
    let fileList = []; 
    
    fs.readdir(dir, (err, files) => {
        
        if (err) return callback(err);
        
        files.forEach(file => {
            if(path.extname(file) === '.'+ext) fileList.push(file);
        });

        return callback(null,fileList)

    });
}



