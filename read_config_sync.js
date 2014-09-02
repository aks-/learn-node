var fs = require('fs');

console.log('Started.');
var config = fs.readFileSync('./files/config.json');
console.log('Content: ', config.toString())
var content = JSON.parse(config);
console.log('The email for user ' + content.name + ' is ' + content.email);
console.log('Finished');