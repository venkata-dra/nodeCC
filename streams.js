const fs = require('fs')

const readStream = fs.createReadStream('./enwik8.txt');
const writeStream  = fs.createWriteStream('./docs/blog2.txt');

// readStream.on('data', (chunk) => {
//     console.log('----NEW CHUNK ----');
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
//     // console.log(chunk.toString())
// })

// piping

readStream.pipe(writeStream)



