let fs = require('fs');
let re = fs.createReadStream('ter.txt')
re.pipe(fs.createWriteStream('writer.txt'))
