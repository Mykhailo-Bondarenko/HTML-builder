const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('process');

const stream = fs.createWriteStream(path.join(__dirname, '../02-write-file')
  + '/text.txt', 'utf-8');
stream.write('');

stdout.write('File text.txt created!\nEnter your text : \n');

stdin.on('data', (data) => {
  if (data.includes('exit')) {
    process.exit();
  } else {
    stream.write(data);
  }
  process.on('SIGINT', () => {
    process.exit();
  });
});
process.on('exit', () => stdout.write('Good luck!'));