const { Port } = require('../src/ship.js');

describe('new port', () => {
  it('returns an object', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('port has a name', () => {
    expect(new Port('Dover').port).toEqual('Dover');
  });
});
