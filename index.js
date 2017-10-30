/*var Readable = require('stream').Readable;*/
//var rs = Readable();

//var c = 97 - 1;

//rs._read = function () {
      //if (c >= 'z'.charCodeAt(0)) return rs.push(null);
          
      //setTimeout(function () {
                //rs.push('我a', 'ascii');
                    
      //}, 100);

//};

//rs.pipe(process.stdout);

//process.on('exit', function () {
      //console.error('\n_read() called ' + (c - 97) + ' times');

//});
//process.stdout.on('error', process.exit);



const fs = require('fs')
const Readable = require('stream').Readable

// node index.js /path/to/textFile
const textFilePath = process.argv[2]
const textContent = fs.readFileSync(textFilePath, 'utf8')
const delayDelta = 50

const rs = new Readable()

let i = 0
rs._read = () => {
  if (i > textContent.length) return rs.push(null)

  setTimeout(() => {
    rs.push(textContent[i++], 'utf8')
  }, 50 + Math.random() * delayDelta)
}

rs.pipe(process.stdout)


process.on('exit', () => {
  console.log('\nBye!')
})

process.stdout.on('error', process.exit)
