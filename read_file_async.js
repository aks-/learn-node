var fs = require('fs');

console.log('Started.');

var file = fs.readFile('./files/text_file.txt', function(err, data){
    if(err != null) console.error(err);
    console.log("Content: " + data);
});

console.log('Finished');
