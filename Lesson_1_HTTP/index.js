// Require our dependencies
const http = require('http');

// Create our server object
const server = http.createServer();

// Define our Handler
const requestHandler = (req, res) => {
    // Simple Response to client upon request
    res.end('Hello Node Newbies!');
};

// Attach our Handler to the request event on our server
server.on('request', requestHandler);

// Spin up our server on specified port and log that server is now listening and ready
server.listen(3000, () => console.log('Listening on port 3000...'));