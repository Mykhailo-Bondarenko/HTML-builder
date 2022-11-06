const fs = require('fs');

async function copyFiles() {

  await fs.promises.rm(`${__dirname}/files-copy`,
    { recursive: true, force: true },
    e => console.log(e));

  await fs.promises.mkdir(`${__dirname}/files-copy`, { recursive: true });

  fs.promises.readdir(__dirname + '/files')
    .then(data => data.forEach(value => {
      fs.promises.copyFile(`${__dirname}/files/${value}`, `${__dirname}/files-copy/${value}`)
    }));
}

copyFiles();