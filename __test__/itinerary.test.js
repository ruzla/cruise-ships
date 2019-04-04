const Itinerary = require('../src/itinerary.js');

describe('Itinerary', () => {
  it('returns an object', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
});
