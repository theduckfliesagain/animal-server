/* ****Node.js Server**** */


const http = require('http');

const host = 'localhost';
const port = 3000;

const requestListener = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    // Set defaults
    let body;
    let statusCode = 200;

    // Handle GET requests 
    switch(request.url){
        case '/cats':
            body = {'cats' : ['Purry', 'Meowy']}
            break;
        case '/dogs':
            body = {'dogs' : ['Runny', 'Hungry']}
            break;
        case '/unicorns':
            body = {'unicorns' : ['Horny', 'Hoofy']}
            break;
        default:
            statusCode = 404;
            body = { error: `Route ${request.url} does not exist`}
            break;
    }

    // Convert to JSON string
    body = body && JSON.stringify(body);
    
    response.statusCode = statusCode;
    response.end(body);
};


// Start server
const server = http.createServer(requestListener);
server.listen(port, host, () => console.log(`All cylinders now firing on http://${host}:${port}!`));

