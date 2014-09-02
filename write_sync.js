var fs = require('fs');

console.log('Starting to write file.');
fs.writeFile('./files/written_text_file.txt', "Synchronous version of fs.write(). Returns the number of bytes written.");
console.log('Finished writing the file');

