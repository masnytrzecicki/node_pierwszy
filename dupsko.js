var http = require('http');
var url = require('url');
http.createServer(
    function (req, res) {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.write('<h1>Karasie odpowiadaja za 13% konsumpcji gowna w rybostanie</h1>');
        res.write('webstorm superior<br>');
        res.write('jebac codziarzy <br>');
        res.write('URL: ' + req.url);
        res.end();
    }
).listen(8080);