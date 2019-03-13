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

it('has a starting point', () => {
  const dover = new Port('Dover');

  const itinerary = new Itinerary([dover]);
  
  const ship = new Ship(itinerary);

  expect(ship.currentPort.port).toBe('Dover');
});


describe('with ports and an itinarary', () => {
  // let ship;

  // let dover;

  // let calais;

  // let itinerary;

  beforeEach(() => {
    // dover = new Port('Dover');

    // calais = new Port('Calais');

    // itinerary = new Itinerary([dover, calais]);

    // ship = new Ship(itinerary);
    const port = {

      removeShip: jest.fn(),

      addShip: jest.fn(),
    };

    dover = {
      ...port,

      name: 'Dover',

      ships: [],
    };

    calais = {
      ...port,

      name: 'Calais',

      ships: [],
    };

    itinerary = new Itinerary([dover, calais]);

    ship = new Ship(itinerary);
  });

  

  it('can set sail', () => {

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();

    expect(dover.removeShip).toHaveBeenCalledWith(ship);
  });

  it('can dock at a different port', () => {

    ship.setSail();

    ship.dock();

    expect(ship.currentPort).toBe(calais);

    expect(port.ships).toHaveBeenCalledWith(ship);
  });


  it('gets added to port on instantiation', () => {

    expect(port.addShip).toHaveBeenCalledWith(ship);
  
  });
});
