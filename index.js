const { Ship }= require('./src/ship.js');
const { Port }= require('./src/port.js');
const { Itinerary } = require('./src/itinerary.js');

const dover = new Port('Dover');
const itinerary = new Itinerary([dover]);
const ship = new Ship(itinerary);

console.log(dover);
console.log();
console.log();
console.log();
console.log();
console.log(itinerary);
console.log();
console.log();
console.log();
console.log();
console.log(ship);