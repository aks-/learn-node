var fs = require('fs');

console.log('Started.');
var content = fs.readFileSync('./files/text_file.txt');
console.log('Content: ', content.toString());
console.log('Finished.');