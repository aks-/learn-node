var fs = require('fs');

console.log('Started.');
var config = fs.readFileSync('./files/watch_config.json');
console.log('Initialy: ', config.toString());
console.log('Make changes to your config and watch them.');
fs.watchFile('./files/watch_config.json', function(curr, prev){
    var config = fs.readFileSync('./files/watch_config.json');
    console.log(config.toString());
});
