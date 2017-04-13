const PORT = 9595;
var fs = require('fs');
var http = require('http');
var server = new http.Server(handleRequest);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('A User!');
})

function handleRequest(req, res) {
  switch(req.url) {
    case '/':
    case '/index.html':
      fs.readFile('public/index.html', function(err, data){
        if(err){
        }
          res.setHeader("Content-Type", "text/html");
          res.end(data);

      });
      break;
    case '/simple-chat.css':
      fs.readFile('public/simple-chat.css', function(err, data){
        if(err){
        }
          res.setHeader("Content-Type", "text/css");
          res.end(data);
      });
      break;
    case '/simple-chat.js':
      fs.readFile('public/simple-chat.js', function(err, data){
        if(err){
        }
          res.setHeader("Content-Type", "text/js");
          res.end(data);
      });
      break;
  }
}

server.listen(PORT, function(){
  console.log(PORT);
});



// run npm install socket.io --save  to install socket modules.
 
