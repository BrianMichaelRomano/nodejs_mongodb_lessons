const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    
    const parsedReq = {}
    
    parsedReq.parsedUrl = url.parse(req.url, true);
    parsedReq.path = parsedReq.parsedUrl.pathname;
    parsedReq.trimmedPath = parsedReq.path.replace(/^\/+|\/+$/g, '');
    parsedReq.method = req.method.toLowerCase();
    parsedReq.queryStringObject = parsedReq.parsedUrl.query;
    
    // Demo response with parsed data.
    res.write(`Path ${parsedReq.trimmedPath}\n`);
    res.write(`Method ${parsedReq.method}\n`);
    res.write(`Query ${JSON.stringify(parsedReq.queryStringObject, null, 1)}\n`);
    res.end('End of response!');
});

server.listen(3000, () => console.log('Listening on port 3000...'));