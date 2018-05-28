const http = require('http');
// Require url module for use in parsing req data
const url = require('url');

// Move requestHandler to the createServer call
const server = http.createServer((req, res) => {
    
    // Create parsedReq object that will store our parsed request data.
    const parsedReq = {}

    // Parse and attach parsedUrl, path, trimmedPath, method and queryStringObject data to parsedReq.
    parsedReq.parsedUrl = url.parse(req.url, true);
    parsedReq.path = parsedReq.parsedUrl.pathname;
    parsedReq.trimmedPath = parsedReq.path.replace(/^\/+|\/+$/g, '');
    parsedReq.method = req.method.toLowerCase();
    parsedReq.queryStringObject = parsedReq.parsedUrl.query;
    
    res.end('End of response!');
});

server.listen(3000, () => console.log('Listening on port 3000...'));