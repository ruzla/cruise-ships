const { Ship } = require('../src/ship.js');

describe('Ship', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  const port = {
    removeShip: jest.fn(),
    addShip: jest.fn(),
  };

  beforeEach(() => {
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

    itinerary = {
      ports: [dover, calais],
    };

    ship = new Ship(itinerary);
  });

  it('returns an object', () => {
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });


  it('has a starting point', () => {
    expect(ship.currentPort).toEqual(dover);
  });

  it('can set sail', () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.removeShip).toHaveBeenCalledWith(ship);
  });

  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();

    expect(calais.addShip).toHaveBeenCalledWith(ship);
    expect(ship.currentPort).toEqual(calais);
  });

  it('gets added to port on instantiation', () => {
    expect(port.addShip).toHaveBeenCalledWith(ship);
  });
});
