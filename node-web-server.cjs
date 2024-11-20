//The nodejs package includes a simple web server that can be run anywhere
//Can you figure out what his code is doing? At least at a high level?

//need these modules
//what do these modules add?
const http = require('http');
const fs = require('fs');

//this looks like networking stuff
const host = '127.0.0.1';
const port = 8080;

//seems to be creating something here
const httpServer = http.createServer(httpHandler);

//and then..."listening?" hmmmm
httpServer.listen(port, host, () => {
  console.log(`HTTP server running at http://${host}:${port}/`);
});

//then there is this function that seems to be "handling" something...
function httpHandler(req, res) {

  fs.readFile('./' + req.url, function (err, data) {

  if (err == null ) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  }
});
}

