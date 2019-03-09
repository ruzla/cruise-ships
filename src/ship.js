function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary;
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
  this.currentPort = '';
};

Ship.prototype.dock = function (port) {
  this.currentPort = port;
};

module.exports = {
  Ship,
};
