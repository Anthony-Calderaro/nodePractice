const http = require('http');
const fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) responseCode = 200;

  fs.readFile(__dirname + path, function(err, data) {
    console.log(err, data);
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Error');
    } else {
      res.writeHead(responseCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}





http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

  switch(path) {
    case '':
      serveStaticFile(res, './public/home.html', 'text/html')
      break;
      
    case '/about':
      serveStaticFile(res, './public/about.html', 'text/html')
      break;
      
    default:
      serveStaticFile(res, './public/404.html', 'text/html')
      break;
  }
}).listen(3000);

console.log('====== Server started on localhost:3000 ====== ');