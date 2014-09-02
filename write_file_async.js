var fs = require('fs');

console.log('Starting to write the file.');
fs.writeFile('./files/written_async', "position is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.",function(err){
    if(err) console.error(err);
    console.log('Written file');
});
console.log('Finished');