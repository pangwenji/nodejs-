const fs = require('fs');
const stream = fs.createReadStream('c.txt')
stream.pipe(fs.createWriteStream('e.txt'))