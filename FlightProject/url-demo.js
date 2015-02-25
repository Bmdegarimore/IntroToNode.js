//url-demo.js

var url = require('url');
var urlString = 
'http://localhost:8080/flight?action=lookup&flight=1435';
var urlData = url.parse(urlString, true);

console.log('query: ' + urlData.query);
console.log('action: ' + urlData.query.action);
console.log('flight: ' + urlData.query.flight);

