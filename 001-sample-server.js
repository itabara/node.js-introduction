var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World \n');
}).listen(8888);

console.log('Server running on port 8888');
