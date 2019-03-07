const { Ship } = require('../src/ship.js');

describe('Ship', () => {
  it('returns an object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a starting point', () => {
    const ship = new Ship('Dover');

    expect(ship.startingPort).toBe('Dover');
  })
});