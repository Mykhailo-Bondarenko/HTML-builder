const fs = require('fs');
const path = require('path');
const from = path.join(__dirname, 'styles');
const to = path.join(__dirname, 'project-dist', 'bundle.css');
const writeStream = fs.createWriteStream(to, 'utf-8');

fs.readdir(from, { withFileTypes: true, encoding: 'utf-8' }, (e, data) => {
  if (e) console.log(e);
  data.filter(value => value.name.endsWith('.css'))
    .forEach(value => {
      const readStream = fs.createReadStream(path.join(from, value.name));
      readStream.pipe(writeStream);
    });
});