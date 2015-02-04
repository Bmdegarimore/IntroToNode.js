//flightProject/flightData.js

var uuid = require('node-uuid');

// Define a flight object
var flight = { flight: 1435, orig: 'ORD',
dest: 'SFO', km: 2960, price: 133.00 };

// Get a flight ID
flight._id = uuid.v1();
console.log ('ID: ' + flight._id);

//Display Flight number
console.log('Flight Number ' + flight.flight);

//Get origin
console.log('Flying from: ' + flight.orig);

//get destination and miles
console.log('Destination: ' + flight.dest + ' Miles: ' + flight.km);

//get price
console.log('The Cost: ' + flight.price);

