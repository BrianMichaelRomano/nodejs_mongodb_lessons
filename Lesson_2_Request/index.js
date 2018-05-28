// Require our dependencies
const http = require('http');

// Create our server object and pass in our handler
const server = http.createServer((req, res) => {
    // Simple Response to client upon request
    res.end('Hello Node Newbies!');
});

// Spin up our server on specified port and log that server is now listening and ready
server.listen(3000, () => console.log('Listening on port 3000...'));