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

    const calais = new Port('Calais');

    const itinerary = new Itinerary([dover, calais]);

    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();

    expect(dover.ships).not.toContain(ship);
  });

  it('can dock at a different port', () => {
    const dover = new Port('Dover');

    const calais = new Port('Calais');

    const itinerary = new Itinerary([dover, calais]);

    const ship = new Ship(itinerary);

    ship.setSail();

    ship.dock();

    expect(ship.currentPort).toBe(calais);

    expect(calais.ships).toContain(ship);
  });


  it('gets added to port on instantiation', () => {
    const dover = new Port('Dover');

    const itinerary = new Itinerary([dover]);

    const ship = new Ship(itinerary);

    expect(dover.ships).toContain(ship);
  });
});
