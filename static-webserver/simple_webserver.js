var http = require('http');
var fs = require('fs');

var config = JSON.parse(fs.readFileSync('./files/config.json'));
var host = config.host
var port = config.port

var server = http.createServer(function(req, res){
    console.log(req.url);
    fs.readFile('./files' + req.url, function(err, data){
        if(err) {
            res.writeHead(404, {"Content-type":"text/plain"});
            res.end("Sorry the page was not find");
        }
        else {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        };
    });
});

server.listen(port, host, function(){
    console.log('Listening to ' + host + ':' + port);
});

fs.watchFile('./files/config.json', function(curr, prev){
    config = JSON.parse(fs.readFileSync('./files/config.json'));
    server.close();
    host = config.host;
    port = config.port;
    server.listen(port, host, function(){
        console.log('Now listening to ' + host + ':' + port);
    });
});