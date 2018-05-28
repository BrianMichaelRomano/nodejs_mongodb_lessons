const http = require('http');

const server = http.createServer();

const requestHandler = (req, res) => {
    res.end('Hello Node Newbies!');
};

server.on('request', requestHandler);

server.listen(3000, () => console.log('Listening on port 3000...'));