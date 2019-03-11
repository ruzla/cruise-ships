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

describe('Port Constructor', () => {
  const port = new Port('Dublin');
  const mockShip = jest.fn();
  const mockShip2 = jest.fn();

  it('removeShip method', () => {
    port.ships = [mockShip2, mockShip];
    port.removeShip(mockShip);
    expect(port.ships).toEqual([mockShip2]);
    expect(port.ships).not.toContain(mockShip);
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
