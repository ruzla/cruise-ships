const { Ship } = require('../src/ship.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

describe('Ship', () => {
  it('returns an object', () => {
    const dover = new Port('Dover');

    const itinerary = new Itinerary([dover]);

    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });
});


describe('with ports and an itinarary', () => {
  let ship;

  let dover;

  let calais;

  let itinerary;
  beforeEach(() => {
    dover = new Port('Dover');

    calais = new Port('Calais');

    itinerary = new Itinerary([dover, calais]);

    ship = new Ship(itinerary);
  });

  it('has a starting point', () => {

    expect(ship.currentPort.port).toBe('Dover');
  });

  it('can set sail', () => {

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();

    expect(dover.ships).not.toContain(ship);
  });

  it('can dock at a different port', () => {

    ship.setSail();

    ship.dock();

    expect(ship.currentPort).toBe(calais);

    expect(calais.ships).toContain(ship);
  });


  it('gets added to port on instantiation', () => {

    expect(dover.ships).toContain(ship);
  });
});
