const { Port } = require('../src/port.js');
const { Ship } = require('../src/ship.js');

describe('new port', () => {
  it('returns an object', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('port has a name', () => {
    expect(new Port('Dover').port).toEqual('Dover');
  });
});

describe('add ship to port', () => {
  it('returns port', () => {
    const port = new Port('Calais');
    const ship = {};
    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it('remove ship', () => {
    const port = new Port('Calais');
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
