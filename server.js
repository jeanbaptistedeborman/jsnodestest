var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  var string="dynamic string"; 
  for (var n=0; n< 100; n++) {
  string += n; 
  	
  }
  res.end('Hello World\n' + string);
}).listen(port);