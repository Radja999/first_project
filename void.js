var http = require('http');
//var dt = require('./module');
 //var url=require('url');
var uc=require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("hello motherfuckers"));
  //var q=url.parse(req.url,true).query;
  //var txt=q.year+" "+q.month;
  
  return res.end();
}).listen(8080);