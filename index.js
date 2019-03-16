const { Ship }= require('./src/ship.js');
const { Port }= require('./src/port.js');
const { Itinerary } = require('./src/itinerary.js');

// const dover = new Port('Dover');
// const itinerary = new Itinerary([dover]);
// const ship = new Ship(itinerary);

// console.log(dover);
// console.log();
// console.log();
// console.log();
// console.log();
// console.log(itinerary);
// console.log();
// console.log();
// console.log();
// console.log();
// console.log(ship);

const dover = new Port('Dover');

const calais = new Port('Calais');

const hull = new Port('Hull');

const liverpool = new Port('Liverpool');

const itinerary = new Itinerary([dover, calais, hull, liverpool]);

const ship = new Ship(itinerary);

console.log(ship);

console.log(dover);

ship.setSail();

ship.dock();

console.log(ship);

console.log(calais);

ship.setSail();

ship.dock();

console.log(ship);

console.log(hull);

ship.setSail();

ship.dock();

console.log(ship);

console.log(liverpool);

// console.log(itinerary);
// console.log();
// console.log();
// console.log();
// console.log();
// console.log(ship.currentPort);
// console.log();
// console.log();
// console.log();
// console.log();
// console.log(calais.ships);
// console.log();
// console.log();
// console.log();
// console.log();
// console.log(ship)