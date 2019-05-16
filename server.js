/**
 * We need to build the HTTP endpoints here
 */
const url = require('url');
const http = require('http');

// Import avengers class
let AvengersAPI = require('./AvengersAPI');

// Create new instance of imported class
let api = new AvengersAPI();

http.createServer(function(request, response) {
    var queryData = url.parse(request.url, true).query;
    console.log(queryData);

    // write headers
    response.writeHead(200, {'Content-type': "application/json"});

    let body = api.searchForAvengers(queryData);

    // write body
    response.write(JSON.stringify(body));

    // close connection
    response.end();

}).listen(8888);

console.log('Listening at http://localhost:8888 ...')

// console.log('COMING FROM SERVER 1',api.searchForAvengers({ name: 'Thor' })); // this should return thor
// console.log('COMING FROM SERVER 2',api.searchForAvengers({ name: 'Man' })); // this should return ironman and spiderman 


// console.log('COMING FROM SERVER TYPE',api.searchForAvengers({ type: 'hero' })); // this should return ironman and spiderman 

