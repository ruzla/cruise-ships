const { Ship, Port } = require('../src/ship.js');

describe('Ship', () => {
  it('returns an object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a starting point', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);

    expect(ship.currentPort.port).toBe('Dover');
  });

  it('can set sail', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy(); 
  });

  it('can dock at a different port', () => {
    const port = new Port('Dover');
    const ship = new Ship(port);

    const calais = new Port('Calias');
    ship.dock(calais);

    expect(ship.currentPort).toBe(calais);
  });
});
