http.createServer(function(request, response) {
    var queryData = url.parse(request.url, true).query;

    data = api.searchForAvengers({s: 'Thor'});
    response.writeHead(200, {'Content-type': 'application/json'}); // write headers, give OK response
    response.write(JSON.stringify(data)); // Output this text to the browser
    response.end(); // Close connection

    console.log('Listening at port 8888...');

}).listen(8888);