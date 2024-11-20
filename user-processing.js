//running javascript on the command line usig "nodejs"
//javascript was originally designed to be run by a browser
//but has morphed into a general purpose language

//need to load the "fs" filesystem module
const fs = require('node:fs');

//just read the file and print it out in 
//stand "utf8" aka ASCII format
fs.readFile('list-of-users.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
