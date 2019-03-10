const { Ship } = require('../src/ship.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

describe('Ship', () => {
  it('returns an object', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });

  it('has a starting point', () => {
    const dover = new Port('Dover');

    const itinerary = new Itinerary([dover]);

    const ship = new Ship(itinerary);

    expect(ship.currentPort.port).toBe('Dover');
  });

  it('can set sail', () => {
    const dover = new Port('Dover');

    const itinerary = new Itinerary([dover]);

    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy(); 
  });

  it('can dock at a different port', () => {
    const dover = new Port('Dover');

    const itinerary = new Itinerary([dover]);

    const ship = new Ship(itinerary);

    const calais = new Port('Calais');
    ship.dock(calais);

    expect(ship.currentPort).toBe(calais);

  });

  it('gets added to port on instantiation', () => {

    const dover = new Port('Dover');

    const itinerary = new Itinerary([dover]);

    const ship = new Ship(itinerary);

    expect(dover.ships).toContain(ship);
  });  
});
