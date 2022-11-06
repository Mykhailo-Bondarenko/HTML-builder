const fs = require('fs');
const path = require('path');
const fullPath = path.join(__dirname, 'secret-folder');

fs.promises.readdir(fullPath, { withFileTypes: true })
  .then(filenames => filenames
    .filter(value => value.isFile())
    .forEach(value => fs.stat(path.join(fullPath, value.name), (e, result) => {
      const data = path.parse(value.name);
      console.log(`${data.name} - ${data.ext.slice(1)} - ${result.size}`);
    }))
  )